export default function upload(options) {
  const { data, file } = options || {};
  const xhr = new XMLHttpRequest();

  // 处理上传失败
  xhr.onerror = function(err) {
    options.onError(err);
  };
  // 上传中
  if (xhr.upload) {
    xhr.upload.onprogress = function(e) {
      file.status = 'uploading';
      file.percentage = null;
      options.onProgress(e);
    };
  }

  // 上传请求成功
  xhr.onload = function(e) {
    const res = e.target;
    options.onSuccess(res.response);
  };

  const formData = new FormData();
  data && Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  formData.append('file', file.binaryFile, file.name);

  xhr.open('post', options.action);
  xhr.send(formData);
}
