document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tag-button');
  const posts = document.querySelectorAll('.post');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedTag = button.dataset.tag;

      posts.forEach(post => {
        const tags = post.dataset.tags.split(',');
        const show = selectedTag === 'all' || tags.includes(selectedTag);
        post.style.display = show ? '' : 'none';
      });
    });
  });
});
