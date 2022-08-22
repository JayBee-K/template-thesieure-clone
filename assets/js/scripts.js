const slideBanner = function () {
	new Swiper('#slideBanner', {
		loop: false,
		simulateTouch: false,
		speed: 250,
		navigation: {
			nextEl: '#slideBanner .slide-button-next',
			prevEl: '#slideBanner .slide-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		on: {
			init: function () {
				Waves.attach('#slideBanner .swiper-slide .btn');
			}
		}
	});
}


const initRowCardChange = function () {
	let elm = $('#form-expandCard_Change');
	elm.find('.createRow').click(function () {
		html = `<div class="row row-10 mb-3 align-items-center">
									<div class="col-md-3">
										<div class="form-group">
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<input type="text" class="form-control" id="code" placeholder="Mã thẻ">
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<input type="text" class="form-control" id="seri" placeholder="Mã Seri">
										</div>
									</div>
									<div class="col-md-2 col-9">
										<div class="form-group">
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-1 col-3">
										<a href="javascript:void(0)"
										   class="deleteRow btn-delete_row btn btn-danger btn-sm waves-light waves-effect">
											<i class="fas fa-trash"></i>
											Xóa
										</a>
									</div>
								</div>`;
		$('#form-expandCard_Change').append(html)
	});

	elm.on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
}
const initRowCardTopUp = function () {
	let elm = $('#form-expandCard_TopUp');
	elm.on('click', '.createRow', function () {
		html = `<div class="row row-10 mb-3 align-items-center">
								<div class="col-md-2">
									<div class="form-group">
										<input type="tel" minlength="10" maxlength="11" class="form-control" id="sdt"
											   placeholder="Số điện thoại">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<select class="form-control" id="nhamang">
											<option name="-1">--- Nhà mạng ---</option>
											<option name="">Viettel trả trước</option>
											<option name="">Viettel trả sau / FTTH / Home</option>
											<option name="">Vina trả trước</option>
											<option name="">Vina trả sau</option>
											<option name="">Mobi trả trước</option>
											<option name="">Mobi trả sau</option>
											<option name="">Bắn TKC Viettel</option>
											<option name="">Bắn TKC Vina</option>
											<option name="">Bắn TKC Mobi</option>
										</select>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<select class="form-control" id="price">
											<option name="-1">--- Mệnh giá ---</option>
											<option name="10000">10.000 đ</option>
											<option name="20000">20.000 đ</option>
											<option name="30000">30.000 đ</option>
											<option name="50000">50.000 đ</option>
											<option name="100000">100.000 đ</option>
											<option name="200000">200.000 đ</option>
											<option name="300000">300.000 đ</option>
											<option name="500000">500.000 đ</option>
											<option name="1000000">1.000.000 đ</option>
										</select>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<input type="text" class="form-control" id="chietkhau" placeholder="Chiết khấu"
											   readonly>
									</div>
								</div>
								<div class="col-md-3 col-9">
									<div class="form-group">
										<input type="text" class="form-control" id="ghichu" placeholder="Ghi chú">
									</div>
								</div>
								<div class=" col-md-1 col-3">
									<a href="javascript:void(0)"
									   class="deleteRow btn-delete_row btn btn-danger btn-sm waves-light waves-effect">
										<i class="fas fa-minus"></i>
										Xóa
									</a>
								</div>
							</div>`;
		$('#form-expandCard_TopUp').append(html)
	});

	elm.on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
}

const changeTabCard = function (e) {
	$('.card-change[data-toggle=tab]').on('shown.bs.tab', function () {
		$('.card-change[data-toggle=tab]').removeClass('active');
		$(this).addClass('active');
		$(this).parent().addClass('active');
	});
}

let windowWidth = $(window).width();
const scrollCartShoppingMobile = function () {
	if (windowWidth < 768 && $('#shopping-cart-wrapper').length > 0) {
		$(window).scroll(function () {
			let top = $(document).scrollTop();
			let heightCart = $('#shopping-cart-wrapper').offset().top - $('#shopping-cart-wrapper').innerHeight();

			if (top >= heightCart) {
				$('.fixedCart').removeClass('show');
			} else {
				$('.fixedCart').addClass('show');
			}
		});
	}

	$('.scrollCart').click(function (e) {
		$('body').animate({
			'scrollTop': $('#shopping-cart-wrapper').offset().top - 60
		}, 250)
	});
}

const handleTouchMove = function (ev) {
	ev.preventDefault();
}

const navigationMobile = function (e) {
	if (windowWidth < 992) {
		$("#header .header-inner .header-inner_nav > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenuTopUp" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenuTopUp" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenuTopUp"
			});
		})

		/*
		 * Call menu mobile
		 */
		let body = $('body'),
			hamburgerIcon = $('#call-header_mobile');

		hamburgerIcon.click(function (e) {
			if (!body.hasClass('is-show_navigation')) {
				body.attr({
					'class': 'is-show_navigation',
					'style': 'overflow-y: hidden'
				});
				document.addEventListener('touchmove', handleTouchMove, {passive: false});
				$('#user-mobile').removeClass('active');
			} else {
				body.attr({
					'class': '',
					'style': ''
				});
				document.removeEventListener('touchmove', handleTouchMove);
			}
		});
	}
}

const callUserMobile = function () {
	$('#call-user_mobile, #header-overlay').click(function () {
		$(this).parent().toggleClass('active');
		$('body').attr({
			'class': '',
			'style': ''
		});
		document.removeEventListener('touchmove', handleTouchMove);
	});

	$(document).mouseup(function (e) {
		let elm = $('#user-mobile');
		elm.is(e.target) || 0 !== elm.has(e.target).length || (
			elm.removeClass('active')
		)
	})
}

const headerScroll = function (e) {
	$(window).scroll(function (e) {
		if ($(document).scrollTop() > $('#header').innerHeight()) {
			$('#header').addClass('is-scroll').removeClass('is-scrolled');
		} else {
			$('#header').removeClass('is-scroll').addClass('is-scrolled');
		}
	});
}
const gameSlide = function () {
	new Swiper('#swiper-games', {
		loop: true,
		speed: 1000,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`;
			},
		},
		autoplay: {
			delay: 100000,
			disableOnInteraction: false,
		},
		on: {
			progress() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide-item").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},

			touchStart() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition(templateBanner, speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-item").style.transition =
						speed + "ms";
				}
			}
		}
	});
}

$(function () {
	Waves.init();
	headerScroll();
	slideBanner();
	gameSlide();

	initRowCardChange();
	initRowCardTopUp();
	changeTabCard();
	scrollCartShoppingMobile();
	navigationMobile();
	callUserMobile();

	// Địa điểm - Đi & đến
	$('.flight-select').each(function () {
		dropdownParent = $(this).parents('.inner');
		$(this).select2({
			dropdownParent: dropdownParent,
			placeholder: "Chọn địa điểm",
			templateResult: styleSelect,
			width: '100%',
		});
	});

	function styleSelect(attrElm) {
		if (!attrElm.id) {
			return attrElm.text;
		}
		let html = $(`<div class="d-flex align-items-center">
                        <div class="sel-icon">
                            <i class="fal ${attrElm.title.split("|")[3]} mb-0 h6"></i>
                        </div>
                        <div class="sel-content">
                            <div class="sel-title font-weight-bold">${attrElm.title.split("|")[0]}</div>
                            <div class="text-muted sel-subtitle">${attrElm.title.split("|")[1]}</div>
                        </div>
	                    <div class="sel-code text-right">
	                        ${attrElm.title.split("|")[2]}
	                    </div>
                    </div>`);

		return html;
	}

	const altFormat = "d-m-Y";
	/***
	 *
	 * Chuyến bay
	 */
	const departureFlatpickrConfig = {
		defaultDate: [Date.now()],
		mode: "single",
		locale: "vn",
		altInput: true,
		altFormat: altFormat,
		showMonths: 2,
		minDate: "today",
		onOpen: function (selectedDates, dateStr, instance) {
			dateDeparture.set('positionElement', $("#date-departure")[0]);
			dateDeparture.set("mode", "single");
		},
	};
	const returnFlatpickrConfig = {
		defaultDate: [Date.now()],
		mode: "single",
		locale: "vn",
		altInput: true,
		altFormat: altFormat,
		showMonths: 2,
		minDate: "today",
		onOpen: function (selectedDates, dateStr, instance) {
			dateDeparture.set('positionElement', $("#date-return")[0]);
			dateReturn.set("mode", "single");
		},
		onChange: function (selectedDates, dateStr, instance) {
			const [departure_val, return_val] = selectedDates;
			if (return_val) {
				const checkOutDate = flatpickr.formatDate(return_val, altFormat);
			}
		},
	};

	dateDeparture = $("#date-departure").flatpickr(departureFlatpickrConfig);

	let htmlRender = '';
	let dateReturn = '';
	$('input[name="choose-flight_chuyenbay"]').change(function (e) {
		if ($('#choose-flight-02:checked').length > 0) {
			htmlRender = `<div class="col col-custom" id="col-mark_chuyenbay__return">
							<div class="inner position-relative trigger-flat_chuyenbay" data-calendar="2">
								<label  for="">Ngày trở về</label>
								<div class="d-flex align-items-center box-inner">
									<i class="fas fa-calendar-alt"></i>
									<input type="text" placeholder="Departure Date"
									       class="border-0 rounded-0 py-0 bg-transparent form-control form-date flatpickr flatpickr-input"
									       id="date-return"/>
								</div>
							</div>
						</div>`;

			$('#col-mark_chuyenbay').after(htmlRender);
			dateReturn = $("#date-return").flatpickr(returnFlatpickrConfig);
		} else {
			htmlRender = ``;
			$('#col-mark_chuyenbay__return').remove();
		}
	});

	$(document).on('click', '.trigger-flat_chuyenbay', function () {
		if ($(this).data('calendar') == 1)
			dateDeparture.open();
		else
			dateReturn.open();
	});

	addEventCounterActions(
		".passenger-event_chuyenbay",
		".value-count-baby_chuyenbay",
		"#total-people_chuyenbay",
		plusCounterHandle,
		minusCounterHandle
	);

	function checkMaxPeople(
		inputCounterElement,
		count,
		countBaby,
		totalCount,
		maxPeople,
		maxBaby
	) {
		if (
			(inputCounterElement.hasClass("value-count-baby_chuyenbay") && count >= maxBaby) ||
			(!inputCounterElement.hasClass("value-count-baby_chuyenbay") &&
				totalCount - countBaby >= maxPeople)
		) {
			return true;
		}

		return false;
	}

	function plusCounterHandle(
		inputCounterElement,
		htmlCounterElement,
		plusCounterElement,
		minusCounterElement,
		counterBabyElement,
		totalCounterElement
	) {
		let count = inputCounterElement.val();
		let countBaby = counterBabyElement.val();
		let countText = htmlCounterElement.html();
		let totalCount = totalCounterElement.html();
		totalCount = Number(totalCount);
		count = Number(count);
		countBaby = Number(countBaby);

		if (
			checkMaxPeople(inputCounterElement, count, countBaby, totalCount, 9, 4)
		) {
			return;
		}

		totalCount += 1;
		count += 1;
		countText = count;

		minusCounterElement.removeClass("disabled");

		inputCounterElement.val(count);
		htmlCounterElement.html(countText);
		totalCounterElement.html(totalCount);

		if (
			checkMaxPeople(inputCounterElement, count, countBaby, totalCount, 9, 4)
		) {
			plusCounterElement.addClass("disabled");
		}
	}

	function minusCounterHandle(
		inputCounterElement,
		htmlCounterElement,
		plusCounterElement,
		minusCounterElement,
		counterBabyElement,
		totalCounterElement
	) {
		let count = inputCounterElement.val();
		let countBaby = counterBabyElement.val();
		let countText = htmlCounterElement.html();
		let totalCount = totalCounterElement.html();
		totalCount = Number(totalCount);
		count = Number(count);
		countBaby = Number(countBaby);

		if (count <= 0 || totalCount <= 1) {
			return;
		}

		if (
			checkMaxPeople(inputCounterElement, count, countBaby, totalCount, 9, 4)
		) {
			plusCounterElement.removeClass("disabled");
		}

		count -= 1;
		countText = count;
		totalCount -= 1;

		inputCounterElement.val(count);
		htmlCounterElement.html(countText);
		totalCounterElement.html(totalCount);

		if (count <= 0) {
			minusCounterElement.addClass("disabled");
		}
	}

	function prepareCounterElements(
		parentCounterElement,
		counterBabyElement,
		totalCounterElement,
		handleCounter
	) {
		const inputCounterElement = parentCounterElement.find(
			".value-passenger-counter_chuyenbay"
		);
		const htmlCounterElement = parentCounterElement.find(
			".passenger-counter_chuyenbay"
		);

		const minusCounterElement = parentCounterElement.find(
			".passenger-minus_chuyenbay"
		);

		const plusCounterElement = parentCounterElement.find(
			".passenger-plus_chuyenbay"
		);

		return handleCounter(
			inputCounterElement,
			htmlCounterElement,
			plusCounterElement,
			minusCounterElement,
			counterBabyElement,
			totalCounterElement
		);
	}

	function addEventCounterActions(
		counterClass,
		counterBabyClass,
		totalCounterId,
		plusCounterHandle,
		minusCounterHandle
	) {
		const totalCounterElement = $(totalCounterId);
		$(counterClass).on("click", ".passenger-plus_chuyenbay", function () {
			const parentCounterElement = $(this).parents(counterClass);
			const counterBabyElement = parentCounterElement
				.parents(".passenger-dropdown-container")
				.find(counterBabyClass);
			prepareCounterElements(
				parentCounterElement,
				counterBabyElement,
				totalCounterElement,
				plusCounterHandle
			);
		});
		$(counterClass).on("click", ".passenger-minus_chuyenbay", function () {
			const parentCounterElement = $(this).parents(counterClass);
			const counterBabyElement = parentCounterElement
				.parents(".passenger-dropdown-container")
				.find(counterBabyClass);
			prepareCounterElements(
				parentCounterElement,
				counterBabyElement,
				totalCounterElement,
				minusCounterHandle
			);
		});
	}

	/***
	 * End Chuyến bay
	 */

	$(".passenger-dropdown").click(function () {
		$(".passenger-dropdown-content").fadeIn();
	});

	$(".passenger-close").click(function (e) {
		e.stopPropagation();
		$(".passenger-dropdown-content").fadeOut();
	});

	$(document).on("mouseup", function (e) {
		var o = $(".form-choose-people");
		o.is(e.target) || 0 !== o.has(e.target).length || (
			$(".passenger-dropdown .passenger-dropdown-content").fadeOut())
	});

	$('.trigger-select').on("click", function () {
		$(this).find('.box-inner select').select2('open');
	});

	$('.handlePrevent').each(function () {
		$(this).click(function (e) {
			e.preventDefault();
		})
	});

	$('#navigation_icon, #navigation-backdrop').click(function () {
		$(this).closest('.navigation').toggleClass('nav-open');
	});

	$('.hasSub > .sub-icon').click(function () {
		$(this).closest('.hasSub').toggleClass('show');
		if ($(this).closest('.hasSub').hasClass('show')) {
			$(this).text('-');
		} else {
			$(this).text('+');
		}
	});

	$('#btn-callMenuUser').click(function () {
		$(this).parent().find('.account-mobile_nav').addClass('is-show');
	});

	$(document).on("mouseup", function (e) {
		var o = $(".account-mobile_nav.is-show");
		o.is(e.target) || 0 !== o.has(e.target).length || (
			$(".account-mobile_nav.is-show").removeClass('is-show'));
	});
});