/**
 * LUIZ. | Growth Estrategista — Main JavaScript
 * Premium interactions, scroll animations, performance optimized
 */

(function () {
  'use strict';

  // ── Configuration ──
  const REVEAL_THRESHOLD = 0.1;
  const COUNTUP_THRESHOLD = 0.5;
  const CAROUSEL_INTERVAL = 5000;

  // ── Smooth Scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl && targetId !== '#') {
        e.preventDefault();
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetEl.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Active Navigation ──
  const sections = document.querySelectorAll('section[id], div[id], aside[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navbar = document.querySelector('nav');
  let isScrollTicking = false;

  function updateScrollState() {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  }

  function requestScrollUpdate() {
    if (isScrollTicking) return;

    isScrollTicking = true;
    window.requestAnimationFrame(function () {
      updateScrollState();
      isScrollTicking = false;
    });
  }

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  updateScrollState();

  // ── Mobile Menu ──
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (menuToggle && navMenu) {
    function toggleMenu(isOpen) {
      navMenu.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('menu-open', isOpen);
    }

    menuToggle.addEventListener('click', function () {
      toggleMenu(!navMenu.classList.contains('open'));
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });
  }

  // ── Reveal on Scroll Animation ──
  function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: REVEAL_THRESHOLD,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ── Features List Stagger Animation ──
  function initStaggerAnimation() {
    const featuresList = document.querySelector('.features-list');
    if (!featuresList) return;

    const items = featuresList.querySelectorAll('li');
    if (!items.length) return;

    const staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          items.forEach(function (item, index) {
            setTimeout(function () {
              item.classList.add('visible');
            }, index * 80);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: REVEAL_THRESHOLD });

    staggerObserver.observe(featuresList);
  }

  // ── Testimonial Carousel with Touch Support ──
  function initCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.dash-testi-slide');
    const dots = carousel.querySelectorAll('.dash-testi-dots .dot');
    let current = 0;
    let timer = null;
    let touchStartX = 0;
    let touchEndX = 0;

    function showSlide(index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function startAutoRotate() {
      stopAutoRotate();
      timer = setInterval(nextSlide, CAROUSEL_INTERVAL);
    }

    function stopAutoRotate() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Dot navigation
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopAutoRotate();
        showSlide(i);
        startAutoRotate();
      });
    });

    // Touch swipe support
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoRotate();
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoRotate();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          nextSlide();
        } else {
          // Swipe right - previous
          showSlide((current - 1 + slides.length) % slides.length);
        }
      }
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);

    // Start
    startAutoRotate();
  }

  // ── Count Up Animation (Optimized) ──
  function initCountUp() {
    const metricValues = document.querySelectorAll('.countup-value[data-countup-value]');
    if (!metricValues.length) return;

    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateValue(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: COUNTUP_THRESHOLD });

    metricValues.forEach(function (el) {
      countObserver.observe(el);
    });

    function animateValue(el) {
      const finalNum = parseFloat(el.dataset.countupValue || '');
      const decimals = Number.parseInt(el.dataset.countupDecimals || '0', 10);

      if (isNaN(finalNum)) {
        el.setAttribute('data-animated', 'true');
        return;
      }

      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = finalNum * eased;

        const display = current.toLocaleString('pt-BR', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });

        el.textContent = progress < 1 && decimals === 0
          ? Math.round(current).toLocaleString('pt-BR')
          : display;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = finalNum.toLocaleString('pt-BR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          });
          el.setAttribute('data-animated', 'true');
        }
      }

      requestAnimationFrame(update);
    }
  }

  // ── Bar Chart Animation ──
  function initBarChartAnimation() {
    const bars = document.querySelectorAll('.dash-bar');
    if (!bars.length) return;

    // Only animate on desktop
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const chartObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          bars.forEach(function (bar, index) {
            setTimeout(function () {
              bar.style.transform = 'scaleY(0)';
              bar.offsetHeight; // Trigger reflow
              bar.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
              bar.style.transform = 'scaleY(1)';
            }, index * 50);
          });
          chartObserver.unobserve(entry.target);
        }
      });
    }, { threshold: REVEAL_THRESHOLD });

    const chart = document.querySelector('.dash-chart');
    if (chart) chartObserver.observe(chart);
  }

  // ── Hero Card Hover Effect (Parallax) ──
  function initHeroCardParallax() {
    const heroCard = document.querySelector('.hero-card');
    if (!heroCard) return;

    // Only on desktop
    if (window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches) return;

    let frameId = null;

    heroCard.addEventListener('mousemove', function (e) {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(function () {
        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        frameId = null;
      });
    });

    heroCard.addEventListener('mouseleave', function () {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      heroCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  }

  // ── Initialize All ──
  function init() {
    initRevealAnimations();
    initStaggerAnimation();
    initCarousel();
    initCountUp();
    initBarChartAnimation();
    initHeroCardParallax();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
