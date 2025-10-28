document.querySelectorAll('.content-box').forEach(box => {
    const buttons = box.querySelectorAll('.tab-button');
    const contents = box.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Chỉ ẩn/mở trong cùng content-box
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        box.querySelector(`#${btn.dataset.tab}`).classList.add('active');
      });
    });
  });