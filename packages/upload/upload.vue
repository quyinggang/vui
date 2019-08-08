<script>
import ajax from './ajax';
import List from './list';

const noop = function() {};

export default {
  name: 'UiUpload',
  components: {
    List
  },
  props: {
    action: String,
    accept: String,
    name: String,
    headers: Object,
    data: Object,
    showFileList: {
      type: Boolean,
      default: false
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    listType: {
      type: String,
      default: 'text',
      validator: value => {
        return ['text', 'picture', 'picture-card'].includes(value);
      }
    },
    onError: {
      type: Function,
      default: noop
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onBeforeUpload: {
      type: Function,
      default: noop
    },
    onBeforeRemove: {
      type: Function,
      default: noop
    },
    onRemove: {
      type: Function,
      default: noop
    },
    httpRequest: {
      type: Function,
      default: ajax
    }
  },
  data() {
    return {
      fileList: [],
      fileIndex: 1
    };
  },
  render() {
    const $slots = this.$slots;
    const className = {
      'ui-upload': true,
      'is-disabled': this.disabled
    };
    return (
      <div class={className}>
        <div class="ui-upload__inner" on-click={this.handleInput}>
          {$slots.default}
          <input
            class="input--file"
            ref="file"
            type="file"
            multiple={this.multiple}
            name={this.name}
            accept={this.accept}
            on-change={this.handleFileChange}
          />
        </div>
        <div class="ui-upload__tooltip">
          {$slots.tip}
        </div>
        <List
          file-list={this.fileList}
          on-remove={this.handleRemove}
        />
      </div>
    );
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files;
      if (!files) return;
      const fileList = Array.prototype.slice.call(files);
      fileList.forEach(rawFile => {
        const file = this.formatFile(rawFile);
        this.handleBeforeUpload(file);
      });
    },
    formatFile(file) {
      const formatFile = {
        uid: Date.now() + (this.fileIndex++),
        status: 'ready',
        name: file.name,
        percentage: 0,
        size: file.size,
        type: file.type,
        binaryFile: file
      };
      this.fileList.push(formatFile);
      return formatFile;
    },
    handleBeforeUpload(file) {
      const checkRes = this.onBeforeUpload(file);
      if (checkRes instanceof Promise) {
        checkRes.then(() => this.upload(file));
      } else {
        (!!checkRes || this.onBeforeUpload === noop) && this.upload(file);
      }
    },
    upload(file) {
      const vm = this;
      const fileList = this.fileList;
      const options = {
        headers: this.headers,
        action: this.action,
        data: this.data || {},
        withCredentials: this.withCredentials,
        file,
        onError(err) {
          vm.spliceFileFromList(file);
          vm.onError(err, file, fileList);
        },
        onSuccess(response) {
          vm.onSuccess(response, file, fileList);
        },
        onProgress(e) {
          vm.onProgress(e, file, fileList);
        }
      };
      this.httpRequest(options);
    },
    handleInput() {
      if (this.disabled) return;
      const input = this.$refs['file'];
      // 避免相同文件上传不触发change事件
      input.value = null;
      input.click();
    },
    spliceFileFromList(file) {
      const fileList = this.fileList;
      const index = fileList.indexOf(file);
      if (index >= 0) {
        fileList.splice(index, 1);
      }
      return index >= 0;
    },
    handleRemove(file) {
      const remove = () => {
        const isSplice = this.spliceFileFromList(file);
        isSplice && this.onRemove(file);
      };
      const checkRes = this.onBeforeRemove(file);
      if (checkRes instanceof Promise) {
        checkRes.then(() => remove());
      } else {
        (!!checkRes || this.onBeforeRemove === noop) && remove();
      }
    }
  }
};
</script>
