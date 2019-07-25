/* eslint-disable */
const apiEllipsis = (function () {
  const init = () => {
    window.onload = () => {
      const parameters = Object.assign(
        {
          wait: 0
        },
        parseQueryString()
      );
      // Emulate wait time
      setTimeout(function() {
        sendMessage('ready', {
          height: document.documentElement.scrollHeight
        });
      }, Number.parseInt(parameters.wait));
    };   
  };

  const dataToEdit = () => {
    const data = parseQueryString();

    return data['p']
      ? JSON.parse(decodeURIComponent(data['p']))
      : [];
  };
  
  const parseQueryString = () => {
    const params = window.location.search.split('?')[1] || '';
    const kv = params.split('&');
    return kv.reduce((result, item) => {
      const [key, value] = item.split('=');
      return Object.assign(result, {
        [key]: value
      });
    }, {});
  };

  const sendMessage = (action, data) => {
    window.parent.postMessage(
      JSON.stringify({
        source: 'custom_embed',
        action,
        data,
        key: parseQueryString()['k']
      }),
      '*'
    );
  };

  const createNewEmbed = ({url, config}) => {
    sendMessage('data', {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16),
      url,
      config
    });
  };
  
  const applyChanges = ({id, url, config}) => {
    sendMessage('data', {
      id,
      url,
      config
    });
  };

  const dismissEditor = () => {
    sendMessage('cancel');
  };

  return {
    init,
    createNewEmbed,
    applyChanges,
    dismissEditor,
    dataToEdit
  };
}());

export default apiEllipsis;
/* eslint-enable */
