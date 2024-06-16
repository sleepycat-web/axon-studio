async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const body = {
    fullName: formData.get('full-name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = new Error('Failed to submit form');
      error.response = response;
      throw error;
    }

    const data = await response.json();
    console.log('Form submitted successfully:', data);
    event.target.reset();
  } catch (error) {
    console.error('Error submitting form:', error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response status text:', error.response.statusText);
    }
  }
}
