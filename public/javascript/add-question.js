async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="question-title"]').value;
  const post_text = document.querySelector('textarea[name="question-url"]').value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-question-form")
  .addEventListener("submit", newFormHandler);
