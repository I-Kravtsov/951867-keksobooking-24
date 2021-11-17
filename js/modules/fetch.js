const getData = async (url, onSuccess, onError) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
};

const sendData = async (url, onSuccess, onError, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
};

export {getData};
export {sendData};
