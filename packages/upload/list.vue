<script>
export default {
  props: {
    fileList: {
      type: Array,
      default: () => []
    }
  },
  render() {
    return (
      <transition-group class="ui-upload__list" name="upload-slide" tag="ul">
        {
          this.fileList.map(file => {
            return (
              <li key={file.uid}>
                <p class="content">
                  <span class="span--name">
                    <i class="icon i-brush"/>
                    <span on-click={() => this.handlePreview(file)}>{file.name}</span>
                  </span>
                  {
                    file.status === 'success'
                      ? <span class="icon--status" on-click={() => this.handleRemove(file)}>
                        <i class="icon--success i-check-circle" />
                        <i class="icon--close i-close" />
                      </span>
                      : file.status === 'uploading'
                        ? `${file.percentage}%`
                        : null
                  }
                </p>
                {
                  file.status === 'uploading' &&
                    <ui-progress show-text={false} percentage={file.percentage} size="mini" />
                }
              </li>
            );
          })
        }
      </transition-group>
    );
  },
  methods: {
    handlePreview(file) {
      this.$emit('preview', file);
    },
    handleRemove(file) {
      this.$emit('remove', file);
    }
  }
};
</script>
