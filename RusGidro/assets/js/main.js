$(document).ready(function(){
    //бегущая строка
   $('.main_runningtitle').css('display', 'block');
    $(function() {
      $('.main_runningtitle').marquee({
        duration: 60000,
        startVisible: true,
        duplicated: true
     });
    }); 


    // слик слайдер фото в popup

    $('.popup_slider_fotoeric').slick({
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      lazyLoad: 'progressive',
    }); 

    // слайдер сервисов в popup

    $('.popup_slider_service').slick({
      dots: false,
      infinite: true,
      /* speed: 200, */
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      vertical: true,
      swipeToSlide: true,
      verticalSwiping: true
    }); 
 

    



    //вызов модального окна для карты

    function bindModal(triggerSelector, modalSelector, closeSelector) {
      const trigger = document.querySelector(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
           

      
      trigger.addEventListener('click', (e) => {
    
            if (e.target) {
                e.preventDefault();
            }
            
            modal.style.display = "block";  
            //document.body.style.overflow = "hidden";
          
      });
      
      close.addEventListener('click', () => {
        
          modal.style.display = "none"; 
          document.body.style.overflow = "";
      });

      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
           
              modal.style.display = "none"; 
              document.body.style.overflow = "";
          
          }
      });
      }



        
      bindModal('.home_icon_dfo', '.popup_dfo', '.popup_dfo .popup_close');
      bindModal('.dfomap', '.popup_dfo', '.popup_dfo .popup_close'); 
      bindModal('.home_icon_krasn', '.popup_krasn', '.popup_krasn .popup_close');
      bindModal('.krasnmap', '.popup_krasn', '.popup_krasn .popup_close'); 
      bindModal('.home_icon_ryaz', '.popup_ryaz', '.popup_ryaz .popup_close');
      bindModal('.ryazmap', '.popup_ryaz', '.popup_ryaz .popup_close'); 
      bindModal('.open_plus', '.popup_yakutsk', '.popup_yakutsk .popup_close'); 

     
      
        
        

      
    //вызов модального окна для сервисов

    function bindModalService(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              slider = modal.querySelector('.popup_slider_service');
  
        
        trigger.addEventListener('click', (e) => {
      
            if (e.target) {
                e.preventDefault();
            }
            modal.style.visibility = "visible";  
              

            $(slider).slick('slickPlay');
        });
        
        close.addEventListener('click', () => {
            modal.style.visibility  = "hidden";         
            document.body.style.overflow = "";
            $(slider).slick('slickPause');
        });
  
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.visibility  = "hidden"; 
                document.body.style.overflow = "";   
                $(slider).slick('slickPause');
            }
        });
        }
  
        bindModalService('.website', '.popup_website', '.popup_website .popup_close');   
        bindModalService('.lkweb', '.popup_lkweb', '.popup_lkweb .popup_close');
        bindModalService('.lkmob', '.popup_lkmob', '.popup_lkmob .popup_close');
        bindModalService('.ikiosk', '.popup_ikiosk', '.popup_ikiosk .popup_close');
        bindModalService('.asvd', '.popup_asvd', '.popup_asvd .popup_close');
        bindModalService('.asvk', '.popup_asvk', '.popup_asvk .popup_close');
        bindModalService('.ivr', '.popup_ivr', '.popup_ivr .popup_close');
        bindModalService('.robot', '.popup_robot', '.popup_robot .popup_close'); 

  // увеличение карты

  function showMap() {
    let trigger = document.querySelector(".btn_start"),
          map = document.querySelector(".big_map"),
          descr = document.querySelector(".main_descr");
          
       trigger.addEventListener('click', () => {
            if (map.classList.contains('min_map')) {
              map.classList.remove('min_map');
              trigger.classList.remove('btn_start_min');
              descr.classList.remove('main_descr_min'); 

            } else {
              map.classList.add('min_map'); 
              trigger.classList.add('btn_start_min');
              descr.classList.add('main_descr_min');
            }         
                        
        });
            
    }

    showMap();


  // адаптация карты 
   /*  window.addEventListener('resize', adaptiveMap);

    
    function adaptiveMap(){
      let map = document.querySelector(".big_map"),
          trigger = document.querySelector(".btn_start"),
          descr = document.querySelector(".main_descr"); 

      const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (viewport_width >= 1299) {
        map.classList.remove('min_map');
        trigger.classList.remove('btn_start_min');
        descr.classList.remove('main_descr_min'); 
      } 
    }

    
    adaptiveMap(); */
  

  // спойлер в модальном окне



    function spoilerModal(triggerSelector, modalSelector) {
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector);
             
  
        trigger.addEventListener('click', () => {
                modal.style.display = "block";
                trigger.style.display = "none";  
        });
  
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                trigger.style.display = "block";
                
            }
        });
    }
  
      
    spoilerModal('.popup_dfo .popup_descr2', '.popup_dfo .popup_descr3');
    spoilerModal('.popup_krasn .popup_descr2', '.popup_krasn .popup_descr3');
    spoilerModal('.popup_ryaz .popup_descr2', '.popup_ryaz .popup_descr3');
    spoilerModal('.popup_yakutsk .popup_descr2', '.popup_yakutsk .popup_descr3');
    //Якутск новый офис
    /* spoilerModal('.open_plus', '.open_descr'); */
   
    
 
    
  
    // главный слайдер

     $('.slider_indication').slick({
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
    }); 



    
  


  // раскрытие доп сервисов на мобилке


  function serviceElse(triggerSelector, servicesSelectors) {
    const trigger = document.querySelector(triggerSelector),
          services = document.querySelectorAll(servicesSelectors);
         
    console.log(services);

    trigger.addEventListener('click', () => {
        trigger.style.display = "none";      
        services.forEach (item => {
            item.style.display = "block";
        })
        
            
    });
    
}
  
    serviceElse('.service_else', '.hide');

    


 // аккордеон в попапе сервисов

 const accordion = (triggersSelector) => { 
    const btns = document.querySelectorAll(triggersSelector);

    

    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {

            document.querySelectorAll('.subservice_descr').forEach((e) => {
                e.classList.remove('active_subservice_descr');
            });

            if (!this.nextElementSibling.classList.contains('active_subservice_descr')) {
                this.nextElementSibling.classList.add('active_subservice_descr');
            } 
        });
    })
         
}; 

accordion ('.subservice');





    // выделения на карте при наведении

    function hoverMark(triggerSelector, markSelector) {
        const trigger = document.querySelector(triggerSelector),
              mark = document.querySelector(markSelector);

        trigger.addEventListener('mouseover', function() {
            mark.style.opacity = '1';
        })

        trigger.addEventListener('mouseout', function() {
            mark.style.opacity = '0.6';
        })

        mark.addEventListener('mouseover', function() {
            mark.style.opacity = '1';
        })

        mark.addEventListener('mouseout', function() {
            mark.style.opacity = '0.6';
        })


              

    }

    hoverMark ('.home_icon_dfo', '.dfomap')
    hoverMark ('.home_icon_krasn', '.krasnmap')
    hoverMark ('.home_icon_ryaz', '.ryazmap')
    hoverMark ('.home_icon_dfo', '.sakhalin')
    hoverMark ('.dfomap', '.sakhalin')
    hoverMark ('.dfomap', '.kuril')
    hoverMark ('.home_icon_dfo', '.kuril')



    //закрывающий тег ready

});

  


