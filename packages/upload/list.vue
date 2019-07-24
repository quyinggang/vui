<script>
export default {
  props: {
    fileList: {
      type: Array,
      default: () => []
    }
  },
  render() {
    let fileList = JSON.parse(JSON.stringify(this.fileList));
    fileList = fileList.map(item => {
      item.isFocus = false;
      return item;
    });
    console.log(fileList);
    return (
      <ul class="ui-upload__list">
        {
          fileList.map(file => {
            return (
              <li
                class={['li', {'is-focus': file.isFocus}]}
                on-focus={() => this.handleFocus(file)}
              >
                <span class="icon">
                  <i class="i-brush"/>
                </span>
                <span on-click={() => this.handlePreview(file)}>{file.name}</span>
                <span class="icon" on-click={() => this.handleRemove(file)}>
                  <i class="i-check-circle-outline" />
                </span>
              </li>
            );
          })
        }
      </ul>
    );
  },
  methods: {
    handleFocus(file) {
      const { isFocus } = file;
      file.isFocus = !isFocus;
    },
    handlePreview(file) {
      this.onPreview(file);
    },
    handleRemove(file) {
      this.onRemove(file);
    }
  }
};
</script>
