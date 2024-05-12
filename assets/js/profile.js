function updateProfile() {
    document.querySelector(".modal").classList.add('open');
    setTimeout(() => {
        document.querySelector(".modal").classList.remove('open');
        setTimeout(() => {
            alert('Cập nhật thành công')
        }, 1000)
    }, 2000);
}