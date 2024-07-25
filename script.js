document.addEventListener('DOMContentLoaded', () => {
    function toggleDetails() {
        const arrow = document.querySelector('.arrow-icon');
        const picture = document.getElementById('picture');
        picture.style.display = 'none';
        arrow.addEventListener('click', () => {
            if (picture.style.display === 'block' || picture.style.display === '') {
                picture.style.display = 'none';
                // Additional animation or state changes can go here
            } else {
                picture.style.display = 'block';
                // Additional animation or state changes can go here
            }
        });
    }

    function toggleDetails1() {
        const arrow = document.querySelector('.arrow-icon1');
        const picture = document.getElementById('picture1');
        picture.style.display = 'none';
        arrow.addEventListener('click', () => {
            if (picture.style.display === 'block' || picture.style.display === '') {
                picture.style.display = 'none';
                // Additional animation or state changes can go here
            } else {
                picture.style.display = 'block';
                // Additional animation or state changes can go here
            }
        });
    }
    function toggleDetails2() {
        const arrow = document.querySelector('.arrow-icon2');
        const picture = document.getElementById('picture2');
        picture.style.display = 'none';
        arrow.addEventListener('click', () => {
            if (picture.style.display === 'block' || picture.style.display === '') {
                picture.style.display = 'none';
                // Additional animation or state changes can go here
            } else {
                picture.style.display = 'block';
                // Additional animation or state changes can go here
            }
        });
    }

    function toggleDetails3() {
        const arrow = document.querySelector('.arrow-icon3');
        const picture = document.getElementById('picture3');
        picture.style.display = 'none';
        arrow.addEventListener('click', () => {
            if (picture.style.display === 'block' || picture.style.display === '') {
                picture.style.display = 'none';
                // Additional animation or state changes can go here
            } else {
                picture.style.display = 'block';
                // Additional animation or state changes can go here
            }
        });
    }

    function toggleDetails4() {
        const arrow = document.querySelector('.arrow-icon4');
        const picture = document.getElementById('picture4');
        picture.style.display = 'none';
        arrow.addEventListener('click', () => {
            if (picture.style.display === 'block' || picture.style.display === '') {
                picture.style.display = 'none';
                // Additional animation or state changes can go here
            } else {
                picture.style.display = 'block';
                // Additional animation or state changes can go here
            }
        });
    }
    toggleDetails();
    toggleDetails1();
    toggleDetails2();
    toggleDetails3();
    toggleDetails4();
});
