const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-content').value.trim();

  if (comment) 
  {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    );

    if (response.ok) {
      document.location.replace(`/post/{{post.id}}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comt-form')
  .addEventListener('submit', newFormHandler);
