

    window.addEventListener('resize', function() {

        let w = document.documentElement.clientWidth;
    
        if (w <= 425) {
    
        return (document.querySelector(".header__content-profile-img").src="./ava.png");

        
        } else if (w > 425) {
    
            return (document.querySelector(".header__content-profile-img").src="./photo.png");
        
            }
    });

    