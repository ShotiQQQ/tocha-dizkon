"use strict";var enter=document.querySelector(".header__button--enter"),enterModal=document.querySelector(".modal-enter"),closeEnterModal=document.querySelector(".modal-enter__close"),reg=document.querySelector(".header__button--reg"),regModal=document.querySelector(".modal-reg"),closeRegModal=document.querySelector(".modal-reg__close"),burger=document.querySelector(".header__burger"),buttons=document.querySelector(".header__buttons"),closeButtons=document.querySelector(".header__close");enter.addEventListener("click",(function(){enterModal.classList.add("modal-enter--active"),buttons.classList.remove("header__buttons--active"),document.body.style.overflowY="hidden"})),closeEnterModal.addEventListener("click",(function(){enterModal.classList.remove("modal-enter--active"),document.querySelectorAll(".modal-enter__input").forEach((function(e){e.value=""})),document.body.style.overflowY=""})),reg.addEventListener("click",(function(){regModal.classList.add("modal-reg--active"),buttons.classList.remove("header__buttons--active"),document.body.style.overflowY="hidden"})),closeRegModal.addEventListener("click",(function(){regModal.classList.remove("modal-reg--active"),document.querySelectorAll(".modal-reg__input").forEach((function(e){e.value=""})),document.body.style.overflowY=""})),burger.addEventListener("click",(function(){buttons.classList.add("header__buttons--active"),document.body.style.overflowY="hidden"})),closeButtons.addEventListener("click",(function(){buttons.classList.remove("header__buttons--active"),document.body.style.overflowY=""}));var swiperReviews=new Swiper(".reviews__swiper",{spaceBetween:30,slidesPerView:"auto",loop:!0,pagination:{el:".reviews-swiper-pag"}});function initTariffsSlider(){document.querySelector(".tariffs__cards").classList.add("swiper-wrapper"),document.querySelectorAll(".tariffs__card").forEach((function(e){e.classList.add("swiper-slide")}));new Swiper(".tariffs__wrapper",{slidesPerView:2,loop:!0,spaceBetween:20,pagination:{el:".tariffs-swiper-pag"},breakpoints:{0:{slidesPerView:1,slidePerGroup:1},650:{slidesPerView:2,slidePerGroup:1}}})}function initStepsSlider(){document.querySelector(".steps__cards").classList.add("swiper-wrapper"),document.querySelectorAll(".steps__card").forEach((function(e){e.classList.add("swiper-slide")}));new Swiper(".steps__wrapper",{slidesPerView:"auto",loop:!0,slidePerGroup:1,spaceBetween:35,pagination:{el:".steps-swiper-pag"}})}window.document.addEventListener("DOMContentLoaded",(function(){var e=window.innerWidth;e<=768?initTariffsSlider():(document.querySelector(".tariffs__cards").classList.remove("swiper-wrapper"),document.querySelectorAll(".tariffs__card").forEach((function(e){e.classList.remove("swiper-slide")}))),e<=450?initStepsSlider():(document.querySelector(".steps__cards").classList.remove("swiper-wrapper"),document.querySelectorAll(".steps__card").forEach((function(e){e.classList.remove("swiper-slide")})))})),window.addEventListener("resize",(function(){var e=window.innerWidth;e<=768?initTariffsSlider():(document.querySelector(".tariffs__cards").classList.remove("swiper-wrapper"),document.querySelectorAll(".header__item").forEach((function(e){e.classList.remove("swiper-slide")}))),e<=450?initStepsSlider():(document.querySelector(".steps__cards").classList.remove("swiper-wrapper"),document.querySelectorAll(".steps__card").forEach((function(e){e.classList.remove("swiper-slide")})))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRlck1vZGFsIiwiY2xvc2VFbnRlck1vZGFsIiwicmVnIiwicmVnTW9kYWwiLCJjbG9zZVJlZ01vZGFsIiwiYnVyZ2VyIiwiYnV0dG9ucyIsImNsb3NlQnV0dG9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJ2YWx1ZSIsInN3aXBlclJldmlld3MiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsInBhZ2luYXRpb24iLCJlbCIsImluaXRUYXJpZmZzU2xpZGVyIiwiYnJlYWtwb2ludHMiLCJzbGlkZVBlckdyb3VwIiwiaW5pdFN0ZXBzU2xpZGVyIiwid2luZG93Iiwid2lkdGgiLCJpbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxNQUFRQyxTQUFTQyxjQUFjLDBCQUMvQkMsV0FBYUYsU0FBU0MsY0FBYyxnQkFDcENFLGdCQUFrQkgsU0FBU0MsY0FBYyx1QkFDekNHLElBQU1KLFNBQVNDLGNBQWMsd0JBQzdCSSxTQUFXTCxTQUFTQyxjQUFjLGNBQ2xDSyxjQUFnQk4sU0FBU0MsY0FBYyxxQkFDdkNNLE9BQVNQLFNBQVNDLGNBQWMsbUJBQ2hDTyxRQUFVUixTQUFTQyxjQUFjLG9CQUNqQ1EsYUFBZVQsU0FBU0MsY0FBYyxrQkFFNUNGLE1BQU1XLGlCQUFpQixTQUFTLFdBQzVCUixXQUFXUyxVQUFVQyxJQUFJLHVCQUN6QkosUUFBUUcsVUFBVUUsT0FBTywyQkFDekJiLFNBQVNjLEtBQUtDLE1BQU1DLFVBQVksUUFDcEMsSUFDQWIsZ0JBQWdCTyxpQkFBaUIsU0FBUyxXQUN0Q1IsV0FBV1MsVUFBVUUsT0FBTyx1QkFDNUJiLFNBQVNpQixpQkFBaUIsdUJBQXVCQyxTQUFRLFNBQUNDLEdBQ3REQSxFQUFFQyxNQUFRLEVBQ2QsSUFDQXBCLFNBQVNjLEtBQUtDLE1BQU1DLFVBQVksRUFDcEMsSUFFQVosSUFBSU0saUJBQWlCLFNBQVMsV0FDMUJMLFNBQVNNLFVBQVVDLElBQUkscUJBQ3ZCSixRQUFRRyxVQUFVRSxPQUFPLDJCQUN6QmIsU0FBU2MsS0FBS0MsTUFBTUMsVUFBWSxRQUNwQyxJQUNBVixjQUFjSSxpQkFBaUIsU0FBUyxXQUNwQ0wsU0FBU00sVUFBVUUsT0FBTyxxQkFDMUJiLFNBQVNpQixpQkFBaUIscUJBQXFCQyxTQUFRLFNBQUNDLEdBQ3BEQSxFQUFFQyxNQUFRLEVBQ2QsSUFDQXBCLFNBQVNjLEtBQUtDLE1BQU1DLFVBQVksRUFDcEMsSUFFQVQsT0FBT0csaUJBQWlCLFNBQVMsV0FDN0JGLFFBQVFHLFVBQVVDLElBQUksMkJBQ3RCWixTQUFTYyxLQUFLQyxNQUFNQyxVQUFZLFFBQ3BDLElBRUFQLGFBQWFDLGlCQUFpQixTQUFTLFdBQ25DRixRQUFRRyxVQUFVRSxPQUFPLDJCQUN6QmIsU0FBU2MsS0FBS0MsTUFBTUMsVUFBWSxFQUNwQyxJQUdBLElBQU1LLGNBQWdCLElBQUlDLE9BQU8sbUJBQW9CLENBQ2pEQyxhQUFjLEdBQ2RDLGNBQWUsT0FDZkMsTUFBTSxFQUNOQyxXQUFZLENBQ1ZDLEdBQUkseUJBSVYsU0FBU0Msb0JBQ0w1QixTQUFTQyxjQUFjLG1CQUFtQlUsVUFBVUMsSUFBSSxrQkFDeERaLFNBQVNpQixpQkFBaUIsa0JBQWtCQyxTQUFRLFNBQUNDLEdBQ2pEQSxFQUFFUixVQUFVQyxJQUFJLGVBQ3BCLElBQ3NCLElBQUlVLE9BQU8sb0JBQXFCLENBQ2xERSxjQUFlLEVBQ2ZDLE1BQU0sRUFDTkYsYUFBYyxHQUNkRyxXQUFZLENBQ1JDLEdBQUksdUJBRVJFLFlBQWEsQ0FDVCxFQUFHLENBQ0NMLGNBQWUsRUFDZk0sY0FBZSxHQUVuQixJQUFLLENBQ0ROLGNBQWUsRUFDZk0sY0FBZSxLQUkvQixDQUVBLFNBQVNDLGtCQUNML0IsU0FBU0MsY0FBYyxpQkFBaUJVLFVBQVVDLElBQUksa0JBQ3REWixTQUFTaUIsaUJBQWlCLGdCQUFnQkMsU0FBUSxTQUFDQyxHQUMvQ0EsRUFBRVIsVUFBVUMsSUFBSSxlQUNwQixJQUNvQixJQUFJVSxPQUFPLGtCQUFtQixDQUM5Q0UsY0FBZSxPQUNmQyxNQUFNLEVBQ05LLGNBQWUsRUFDZlAsYUFBYyxHQUNkRyxXQUFZLENBQ1JDLEdBQUksc0JBR2hCLENBRUFLLE9BQU9oQyxTQUFTVSxpQkFBaUIsb0JBQW9CLFdBQ2pELElBQU11QixFQUFRRCxPQUFPRSxXQUNqQkQsR0FBUyxJQUNUTCxxQkFFQTVCLFNBQVNDLGNBQWMsbUJBQW1CVSxVQUFVRSxPQUFPLGtCQUMzRGIsU0FBU2lCLGlCQUFpQixrQkFBa0JDLFNBQVEsU0FBQ0MsR0FDakRBLEVBQUVSLFVBQVVFLE9BQU8sZUFDdkIsS0FFQW9CLEdBQVMsSUFDVEYsbUJBRUEvQixTQUFTQyxjQUFjLGlCQUFpQlUsVUFBVUUsT0FBTyxrQkFDekRiLFNBQVNpQixpQkFBaUIsZ0JBQWdCQyxTQUFRLFNBQUNDLEdBQy9DQSxFQUFFUixVQUFVRSxPQUFPLGVBQ3ZCLElBRVIsSUFFQW1CLE9BQU90QixpQkFBaUIsVUFBVSxXQUM5QixJQUFNdUIsRUFBUUQsT0FBT0UsV0FDakJELEdBQVMsSUFDVEwscUJBRUE1QixTQUFTQyxjQUFjLG1CQUFtQlUsVUFBVUUsT0FBTyxrQkFDM0RiLFNBQVNpQixpQkFBaUIsaUJBQWlCQyxTQUFRLFNBQUNDLEdBQ2hEQSxFQUFFUixVQUFVRSxPQUFPLGVBQ3ZCLEtBRUFvQixHQUFTLElBQ1RGLG1CQUVBL0IsU0FBU0MsY0FBYyxpQkFBaUJVLFVBQVVFLE9BQU8sa0JBQ3pEYixTQUFTaUIsaUJBQWlCLGdCQUFnQkMsU0FBUSxTQUFDQyxHQUMvQ0EsRUFBRVIsVUFBVUUsT0FBTyxlQUN2QixJQUVSIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnV0dG9uLS1lbnRlcicpO1xyXG5jb25zdCBlbnRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWVudGVyJyk7XHJcbmNvbnN0IGNsb3NlRW50ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1lbnRlcl9fY2xvc2UnKTtcclxuY29uc3QgcmVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnV0dG9uLS1yZWcnKTtcclxuY29uc3QgcmVnTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVnJyk7XHJcbmNvbnN0IGNsb3NlUmVnTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVnX19jbG9zZScpO1xyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1dHRvbnMnKTtcclxuY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2xvc2UnKTtcclxuXHJcbmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZW50ZXJNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1lbnRlci0tYWN0aXZlJyk7XHJcbiAgICBidXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnV0dG9ucy0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG59KVxyXG5jbG9zZUVudGVyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBlbnRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWVudGVyLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1lbnRlcl9faW5wdXQnKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS52YWx1ZSA9ICcnO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJyc7XHJcbn0pXHJcblxyXG5yZWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZWdNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1yZWctLWFjdGl2ZScpO1xyXG4gICAgYnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnMtLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxufSlcclxuY2xvc2VSZWdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlZ01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXJlZy0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtcmVnX19pbnB1dCcpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBlLnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxufSlcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idXR0b25zLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbn0pO1xyXG5cclxuY2xvc2VCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnMtLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxufSlcclxuXHJcblxyXG5jb25zdCBzd2lwZXJSZXZpZXdzID0gbmV3IFN3aXBlcignLnJldmlld3NfX3N3aXBlcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5yZXZpZXdzLXN3aXBlci1wYWcnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0VGFyaWZmc1NsaWRlcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJpZmZzX19jYXJkcycpLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci13cmFwcGVyJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyaWZmc19fY2FyZCcpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1zbGlkZScpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IHN3aXBlclRhcmlmZnMgPSBuZXcgU3dpcGVyKCcudGFyaWZmc19fd3JhcHBlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnRhcmlmZnMtc3dpcGVyLXBhZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjUwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdGVwc1NsaWRlcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGVwc19fY2FyZHMnKS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItd3JhcHBlcicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0ZXBzX19jYXJkJykuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc3dpcGVyU3RlcHMgPSBuZXcgU3dpcGVyKCcuc3RlcHNfX3dyYXBwZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgc2xpZGVQZXJHcm91cDogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDM1LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3RlcHMtc3dpcGVyLXBhZycsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAod2lkdGggPD0gNzY4KSB7IFxyXG4gICAgICAgIGluaXRUYXJpZmZzU2xpZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJpZmZzX19jYXJkcycpLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci13cmFwcGVyJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmlmZnNfX2NhcmQnKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLXNsaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAod2lkdGggPD0gNDUwKSB7IFxyXG4gICAgICAgIGluaXRTdGVwc1NsaWRlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlcHNfX2NhcmRzJykuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLXdyYXBwZXInKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RlcHNfX2NhcmQnKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLXNsaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAod2lkdGggPD0gNzY4KSB7IFxyXG4gICAgICAgIGluaXRUYXJpZmZzU2xpZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJpZmZzX19jYXJkcycpLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci13cmFwcGVyJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9faXRlbScpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItc2xpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh3aWR0aCA8PSA0NTApIHsgXHJcbiAgICAgICAgaW5pdFN0ZXBzU2xpZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGVwc19fY2FyZHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItd3JhcHBlcicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGVwc19fY2FyZCcpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItc2xpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
