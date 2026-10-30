import React, { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Analytics } from '@vercel/analytics/react';
import {
  Globe,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Github,
  Sun,
  Moon,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Copy,
  Check,
  Eye,
  X,
  Menu,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

function SocialBrandIcon({ id, size = 18 }) {
  switch (id) {
    case 'whatsapp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14.12c-.24.68-1.4 1.3-1.95 1.38-.51.08-1.16.11-1.87-.12-.44-.14-1-.33-1.71-.64-2.99-1.3-4.94-4.32-5.09-4.52-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.49.22.57.35.07.12.07.72-.18 1.4Z" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.39-3.88-1.39-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.56 31.56 0 0 0 0 12a31.56 31.56 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.56 31.56 0 0 0 24 12a31.56 31.56 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
        </svg>
      );
    default:
      return <ExternalLink size={size} />;
  }
}

function SkillTechIcon({ id, size = 18 }) {
  const strokeProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (id) {
    case 'laravel':
      return (
        <svg {...strokeProps}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m12 12 8-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12 4 7.5" />
        </svg>
      );
    case 'php':
      return (
        <svg {...strokeProps}>
          <ellipse cx="12" cy="12" rx="10" ry="6.5" />
          <path d="m9.5 9.5-2 2.5 2 2.5" />
          <path d="m14.5 9.5 2 2.5-2 2.5" />
          <path d="m12.7 9-1.4 6" />
        </svg>
      );
    case 'filament':
      return (
        <svg {...strokeProps}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...strokeProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'spatie':
      return (
        <svg {...strokeProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'rest':
      return (
        <svg {...strokeProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'react':
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'livewire':
      return (
        <svg {...strokeProps}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg {...strokeProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M10 10v5a1.5 1.5 0 0 1-3 0" />
          <path d="M16.5 10.5c-.8-.5-2-.4-2 .7 0 1.3 2.5 1 2.5 2.5 0 1.2-1.4 1.6-2.5 1" />
        </svg>
      );
    case 'htmlcss':
      return (
        <svg {...strokeProps}>
          <polygon points="4 3 20 3 18.5 18 12 21 5.5 18 4 3" />
          <polyline points="8 8 16 8 15.5 13 12 14.5 8.5 13 8.3 11" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg {...strokeProps}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 7h4a2.2 2.2 0 0 1 0 4.4H9V7Z" />
          <path d="M9 11.4h4.5a2.3 2.3 0 0 1 0 4.6H9v-4.6Z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg {...strokeProps}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case 'redis':
      return (
        <svg {...strokeProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      );
    case 'search':
      return (
        <svg {...strokeProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      );
    case 'reverb':
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
          <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
        </svg>
      );
    case 'git':
      return (
        <svg {...strokeProps}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M6 8.5v7" />
          <path d="M18 8.5a6 6 0 0 1-6 6H6" />
        </svg>
      );
    case 'postman':
      return (
        <svg {...strokeProps}>
          <path d="M22 2 11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    case 'desktop':
      return (
        <svg {...strokeProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...strokeProps}>
          <rect x="6" y="2" width="12" height="20" rx="2.5" />
          <path d="M12 18h.01" />
        </svg>
      );
    default:
      return <Globe size={size} />;
  }
}

function getSystemScheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getRenderedScheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem('color-scheme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // Ignore storage access errors
  }
  return getSystemScheme();
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('portfolio-lang') || 'ar';
    } catch {
      return 'ar';
    }
  });

  const [renderedScheme, setRenderedScheme] = useState(getRenderedScheme);
  const [activeSection, setActiveSection] = useState(0);
  const [copiedField, setCopiedField] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project Preview Dialog State
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const dialogRef = useRef(null);

  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'fallback'

  const lastWheelNavRef = useRef(0);
  const pageScrollRefs = useRef([]);
  const touchStartYRef = useRef(null);

  const t = portfolioData[lang];
  const { personal } = portfolioData;
  const totalSections = t.nav.length;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      // Ignore storage error
    }
  }, [lang, t.dir]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = () => {
      setRenderedScheme(getRenderedScheme());
    };

    const handleStorageChange = (event) => {
      if (event.key === 'color-scheme') {
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) {
          meta.content = event.newValue ?? 'light dark';
        }
        setRenderedScheme(getRenderedScheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Light-dismiss fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      setSelectedProject(null);
    };

    dialog.addEventListener('close', handleClose);

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };

      let pressedOutside = false;
      const onPointerDown = (e) => {
        if (e.target !== dialog) {
          pressedOutside = false;
          return;
        }
        pressedOutside = isOutside(e);
      };
      const onPointerUp = (e) => {
        if (pressedOutside && e.target === dialog && isOutside(e)) {
          dialog.close();
        }
        pressedOutside = false;
      };

      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      return () => {
        dialog.removeEventListener('close', handleClose);
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveGalleryIdx(0);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeProjectModal = () => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    } else {
      setSelectedProject(null);
    }
  };

  const handleToggleTheme = useCallback(() => {
    const current = getRenderedScheme();
    const target = current === 'dark' ? 'light' : 'dark';
    const sys = getSystemScheme();
    const meta = document.querySelector('meta[name="color-scheme"]');

    try {
      if (target !== sys) {
        localStorage.setItem('color-scheme', target);
        if (meta) meta.content = target;
      } else {
        localStorage.removeItem('color-scheme');
        if (meta) meta.content = 'light dark';
      }
    } catch {
      if (meta) meta.content = target;
    }

    setRenderedScheme(target);
  }, []);

  const goToSection = useCallback(
    (targetIdx) => {
      setMobileMenuOpen(false);
      if (targetIdx < 0 || targetIdx >= totalSections || targetIdx === activeSection) {
        return;
      }

      const targetScroller = pageScrollRefs.current[targetIdx];
      if (targetScroller) {
        targetScroller.scrollTop = 0;
      }

      setActiveSection(targetIdx);
    },
    [activeSection, totalSections]
  );

  useEffect(() => {
    const handleWheel = (e) => {
      if (dialogRef.current?.open) return;
      if (Math.abs(e.deltaY) < 16) return;

      const currentScroller = pageScrollRefs.current[activeSection];
      if (currentScroller) {
        const { scrollTop, scrollHeight, clientHeight } = currentScroller;
        const hasInternalScroll = scrollHeight > clientHeight + 6;

        if (hasInternalScroll) {
          const atBottom = scrollTop + clientHeight >= scrollHeight - 6;
          const atTop = scrollTop <= 6;

          if (e.deltaY > 0 && !atBottom) return;
          if (e.deltaY < 0 && !atTop) return;
        }
      }

      const now = performance.now();
      if (now - lastWheelNavRef.current < 560) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && activeSection < totalSections - 1) {
        e.preventDefault();
        lastWheelNavRef.current = now;
        goToSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        e.preventDefault();
        lastWheelNavRef.current = now;
        goToSection(activeSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, totalSections, goToSection]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (dialogRef.current?.open) return;
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        return;
      }
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSection(activeSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSection(activeSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSection(totalSections - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, totalSections, goToSection, mobileMenuOpen]);

  const handleTouchStart = (e) => {
    if (dialogRef.current?.open) return;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (dialogRef.current?.open || touchStartYRef.current === null) return;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
    touchStartYRef.current = null;

    if (Math.abs(deltaY) < 55) return;

    const currentScroller = pageScrollRefs.current[activeSection];
    if (currentScroller) {
      const { scrollTop, scrollHeight, clientHeight } = currentScroller;
      const hasInternalScroll = scrollHeight > clientHeight + 6;
      if (hasInternalScroll) {
        const atBottom = scrollTop + clientHeight >= scrollHeight - 6;
        const atTop = scrollTop <= 6;
        if (deltaY > 0 && !atBottom) return;
        if (deltaY < 0 && !atTop) return;
      }
    }

    if (deltaY > 0) {
      goToSection(activeSection + 1);
    } else {
      goToSection(activeSection - 1);
    }
  };

  const handleCopy = (value, field) => {
    navigator.clipboard?.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    // 1. Try EmailJS library if credentials configured
    const emailJsServiceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || portfolioData.personal.emailJsServiceId;
    const emailJsTemplateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || portfolioData.personal.emailJsTemplateId;
    const emailJsPublicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || portfolioData.personal.emailJsPublicKey;

    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      try {
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            from_name: formState.name,
            from_email: formState.email,
            subject: formState.subject || `رسالة من ${formState.name} — موقعك الشخصي`,
            message: formState.message,
            to_email: personal.email,
          },
          emailJsPublicKey
        );
        setSubmitStatus('sent');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
        return;
      } catch (err) {
        console.warn('EmailJS attempt failed, trying FormSubmit background AJAX:', err);
      }
    }

    // 2. Direct silent in-page background submission via FormSubmit AJAX (stays in page without opening email app)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject || `رسالة من ${formState.name} — موقعك الشخصي`,
          message: formState.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success !== 'false') {
        setSubmitStatus('sent');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
        return;
      }

      if (data?.message && data.message.toLowerCase().includes('activation')) {
        setSubmitStatus('needs_activation');
        return;
      }
    } catch (err) {
      console.warn('Background submit error:', err);
    }

    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus('idle'), 6000);
  };

  const handleWhatsappSubmit = () => {
    const text = encodeURIComponent(
      `مرحباً إبراهيم، معك ${formState.name || ''}.\n${
        formState.subject ? `${formState.subject}\n` : ''
      }${formState.message || ''}`
    );
    window.open(`${personal.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const getPageState = (index) => {
    if (index === activeSection) return 'active';
    return index < activeSection ? 'past' : 'future';
  };

  return (
    <div
      className="portfolio-shell"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <header className="top-navbar">
        <button
          type="button"
          className="brand-identity"
          onClick={() => goToSection(0)}
        >
          <span className="brand-name">{t.name}</span>
        </button>

        <nav className="nav-links" aria-label="Sections">
          {t.nav.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className="nav-link-btn"
              aria-current={activeSection === idx ? 'location' : undefined}
              onClick={() => goToSection(idx)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="control-btn"
            onClick={() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))}
            title={t.langName}
          >
            <Globe size={15} />
            <span>{t.langLabel}</span>
          </button>

          <button
            type="button"
            className="control-btn"
            onClick={handleToggleTheme}
            aria-label={
              renderedScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            title={
              renderedScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
          >
            {renderedScheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="control-btn nav-github-btn"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={16} />
          </a>

          <button
            type="button"
            className="control-btn mobile-menu-btn"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              className="mobile-nav-backdrop"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav
              id="mobile-nav-drawer"
              className="mobile-nav-drawer"
              aria-label={lang === 'ar' ? 'أقسام الموقع' : 'Site Sections'}
            >
              <div className="mobile-nav-list">
                {t.nav.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className="mobile-nav-item"
                    data-active={activeSection === idx}
                    aria-current={activeSection === idx ? 'location' : undefined}
                    onClick={() => {
                      goToSection(idx);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="mobile-nav-idx font-mono">0{idx + 1}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                    {activeSection === idx && <span className="mobile-nav-dot" aria-hidden="true" />}
                  </button>
                ))}
              </div>

              <div className="mobile-nav-footer">
                <a
                  href={personal.cvUrl}
                  download="Ibrahim_Banour_CV.pdf"
                  className="mobile-cv-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={16} />
                  <span>{t.ctaDownloadCv}</span>
                </a>

                <div className="mobile-socials-row">
                  {personal.socials.slice(0, 5).map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-icon"
                      aria-label={soc.name}
                      title={soc.name}
                    >
                      <SocialBrandIcon id={soc.id} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Minimal Side Section Indicator Dots */}
      <nav className="side-dots-nav" aria-label="Section Progress">
        {t.nav.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className="side-dot-btn"
            aria-label={item.label}
            aria-current={activeSection === idx ? 'location' : undefined}
            title={item.label}
            onClick={() => goToSection(idx)}
          />
        ))}
      </nav>

      {/* Main Continuous GPU Glide Deck */}
      <main className="page-deck-stage">
        <div
          className="sections-track"
          style={{
            transform: `translate3d(0, -${activeSection * 100}%, 0)`,
          }}
        >
          {/* SECTION 01: HERO */}
          <section
            className="section-page"
            data-page-state={getPageState(0)}
            aria-hidden={activeSection !== 0}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[0] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="hero-wrapper">
                  <div className="hero-location">
                    <MapPin size={15} />
                    <span>{t.location}</span>
                  </div>

                  <h1 className="hero-headline">{t.heroTitle}</h1>
                  <p className="hero-subtitle">{t.heroSubtitle}</p>
                  <p className="hero-bio">{t.heroBio}</p>

                  <div className="hero-cta-row">
                    <button
                      type="button"
                      className="btn-solid"
                      onClick={() => goToSection(4)}
                    >
                      <span>{t.ctaProjects}</span>
                    </button>

                    <a
                      href={personal.cvUrl}
                      download="Ibrahim_Banour_CV.pdf"
                      className="btn-outline"
                    >
                      <Download size={16} />
                      <span>{t.ctaDownloadCv}</span>
                    </a>

                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => goToSection(5)}
                    >
                      <Mail size={16} />
                      <span>{t.ctaContact}</span>
                    </button>
                  </div>

                  {/* Clean Icon Row Inside Hero Card */}
                  <div className="hero-socials-bar">
                    {personal.socials.map((soc) => (
                      <a
                        key={soc.id}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-btn"
                        aria-label={soc.name}
                        title={`${soc.name} (${soc.handle})`}
                      >
                        <SocialBrandIcon id={soc.id} size={19} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 02: ABOUT & EDUCATION */}
          <section
            className="section-page"
            data-page-state={getPageState(1)}
            aria-hidden={activeSection !== 1}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[1] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="section-header">
                  <h2 className="section-title">{t.about.title}</h2>
                  <p className="section-desc">{t.about.description}</p>
                </div>

                {/* Key Numbers & Stats Row */}
                <div className="about-stats-grid">
                  {t.about.stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                      <span className="stat-value font-mono">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="about-grid">
                  <div className="experience-stack">
                    {t.about.experienceItems.map((item, idx) => (
                      <div key={idx} className="clean-card">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="side-info-stack">
                    <div className="clean-card">
                      <h3 className="card-title">{t.about.educationTitle}</h3>
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: '0.96rem',
                          marginTop: '0.4rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {t.about.educationDegree}
                      </p>
                      <p className="card-desc" style={{ marginTop: '0.2rem' }}>
                        {t.about.educationUni}
                      </p>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.6rem',
                        }}
                      >
                        {t.about.educationDate}
                      </p>
                    </div>

                    <div className="clean-card">
                      <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                        {t.about.languagesTitle}
                      </h3>
                      {t.about.languages.map((l, idx) => (
                        <div key={idx} className="meta-line">
                          <span style={{ fontWeight: 600 }}>{l.name}</span>
                          <span style={{ color: 'var(--text-secondary)' }}>{l.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 03: SERVICES */}
          <section
            className="section-page"
            data-page-state={getPageState(2)}
            aria-hidden={activeSection !== 2}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[2] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="section-header">
                  <h2 className="section-title">{t.servicesSection.title}</h2>
                  <p className="section-desc">{t.servicesSection.description}</p>
                </div>

                <div className="services-grid">
                  {t.servicesSection.items.map((srv, idx) => (
                    <div key={idx} className="clean-card">
                      <span className="service-tech-tag font-mono">{srv.tech}</span>
                      <h3 className="card-title">{srv.title}</h3>
                      <p className="card-desc">{srv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 04: SKILLS */}
          <section
            className="section-page"
            data-page-state={getPageState(3)}
            aria-hidden={activeSection !== 3}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[3] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="section-header">
                  <h2 className="section-title">{t.skillsSection.title}</h2>
                  <p className="section-desc">{t.skillsSection.description}</p>
                </div>

                <div className="skills-matrix">
                  {t.skillsSection.categories.map((cat) => (
                    <div key={cat.id} className="skill-col">
                      <div className="skill-col-head">
                        <span className="skill-col-idx font-mono">{cat.num}</span>
                        <h3 className="skill-col-name">{cat.title}</h3>
                      </div>

                      <ul className="skill-col-list">
                        {cat.items.map((skill) => (
                          <li key={skill.name} className="skill-item">
                            <span className="skill-item-icon">
                              <SkillTechIcon id={skill.icon} size={19} />
                            </span>
                            <span className="skill-item-text font-mono">{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 05: LIVE PROJECTS */}
          <section
            className="section-page"
            data-page-state={getPageState(4)}
            aria-hidden={activeSection !== 4}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[4] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="section-header">
                  <h2 className="section-title">{t.projectsSection.title}</h2>
                  <p className="section-desc">{t.projectsSection.description}</p>
                </div>

                <div className="projects-grid">
                  {t.projectsSection.projects.map((project) => (
                    <article key={project.id} className="project-card">
                      <button
                        type="button"
                        className="project-thumb-btn"
                        onClick={() => openProjectModal(project)}
                        aria-label={project.title}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-thumb-img"
                          loading="lazy"
                        />
                      </button>

                      <div className="project-body">
                        <span className="project-domain font-mono">{project.domain}</span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-short-desc">{project.shortDesc}</p>

                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="project-tag font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="project-card-actions">
                          <button
                            type="button"
                            className="project-details-btn"
                            onClick={() => openProjectModal(project)}
                          >
                            <Eye size={14} />
                            <span>{t.projectsSection.detailsBtn}</span>
                          </button>

                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                          >
                            <span>{t.projectsSection.visitBtn}</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 06: CONTACT & SOCIALS */}
          <section
            className="section-page"
            data-page-state={getPageState(5)}
            aria-hidden={activeSection !== 5}
          >
            <div
              className="page-scroll-body"
              ref={(el) => {
                pageScrollRefs.current[5] = el;
              }}
            >
              <div className="page-inner-container">
                <div className="section-header">
                  <h2 className="section-title">{t.contactSection.title}</h2>
                  <p className="section-desc">{t.contactSection.description}</p>
                </div>

                <div className="contact-grid">
                  <div className="contact-list">
                    <div className="contact-item-row">
                      <div>
                        <div className="contact-label">{t.contactSection.emailLabel}</div>
                        <a
                          href={`mailto:${personal.email}`}
                          className="contact-value font-mono"
                        >
                          {personal.email}
                        </a>
                      </div>
                      <button
                        type="button"
                        className="control-btn"
                        aria-label={t.contactSection.copyText}
                        title={
                          copiedField === 'email'
                            ? t.contactSection.copiedText
                            : t.contactSection.copyText
                        }
                        onClick={() => handleCopy(personal.email, 'email')}
                      >
                        {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="contact-item-row">
                      <div>
                        <div className="contact-label">{t.contactSection.phoneLabel}</div>
                        <a
                          href={personal.tel}
                          className="contact-value font-mono"
                          dir="ltr"
                        >
                          {personal.phone}
                        </a>
                      </div>
                      <button
                        type="button"
                        className="control-btn"
                        aria-label={t.contactSection.copyText}
                        title={
                          copiedField === 'phone'
                            ? t.contactSection.copiedText
                            : t.contactSection.copyText
                        }
                        onClick={() => handleCopy(personal.phone, 'phone')}
                      >
                        {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="socials-grid">
                      {personal.socials.map((soc) => (
                        <a
                          key={soc.id}
                          href={soc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-card-link"
                        >
                          <div className="social-card-left">
                            <span className="social-card-icon">
                              <SocialBrandIcon id={soc.id} size={17} />
                            </span>
                            <div>
                              <div className="social-card-name">{soc.name}</div>
                              <div className="social-card-handle font-mono" dir="ltr">
                                {soc.handle}
                              </div>
                            </div>
                          </div>
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <form className="clean-card" onSubmit={handleEmailSubmit}>
                    <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                      {t.contactSection.formTitle}
                    </h3>

                    <div className="form-grid">
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder={t.contactSection.namePlaceholder}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                      />
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder={t.contactSection.emailPlaceholder}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                      />
                    </div>

                    <input
                      type="text"
                      className="form-input"
                      style={{ marginBottom: '0.85rem' }}
                      placeholder={t.contactSection.subjectPlaceholder}
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, subject: e.target.value }))
                      }
                    />

                    <textarea
                      required
                      className="form-textarea"
                      placeholder={t.contactSection.messagePlaceholder}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                    />

                    {submitStatus === 'sent' && (
                      <div className="form-status-banner form-status-success" role="status">
                        {t.contactSection.sentSuccessMsg}
                      </div>
                    )}

                    {submitStatus === 'needs_activation' && (
                      <div className="form-status-banner form-status-warning" role="status">
                        {t.contactSection.activationMsg}
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="form-status-banner form-status-error" role="status">
                        {t.contactSection.errorMsg}
                      </div>
                    )}

                    <div className="form-actions">
                      <button
                        type="submit"
                        className="btn-solid"
                        disabled={submitStatus === 'sending'}
                      >
                        <Mail size={15} />
                        <span>
                          {submitStatus === 'sending'
                            ? t.contactSection.sendingBtn
                            : t.contactSection.sendEmailBtn}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn-outline"
                        onClick={handleWhatsappSubmit}
                      >
                        <MessageCircle size={15} />
                        <span>{t.contactSection.sendWhatsappBtn}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Native <dialog> for Project Details & Gallery */}
      <dialog
        ref={dialogRef}
        className="project-modal"
        aria-labelledby="project-dialog-title"
        {...{ closedby: 'any' }}
      >
        {selectedProject && (
          <div>
            <div className="modal-header-bar">
              <div>
                <span className="project-domain font-mono">{selectedProject.domain}</span>
                <h2 id="project-dialog-title" className="card-title" style={{ margin: 0 }}>
                  {selectedProject.title}
                </h2>
              </div>
              <form method="dialog">
                <button
                  type="submit"
                  className="control-btn"
                  aria-label={t.projectsSection.closeModal}
                  onClick={closeProjectModal}
                >
                  <X size={15} />
                  <span>{t.projectsSection.closeModal}</span>
                </button>
              </form>
            </div>

            <div className="modal-gallery-stage">
              <img
                src={selectedProject.images?.[activeGalleryIdx] || selectedProject.image}
                alt={selectedProject.title}
                className="modal-main-img"
              />
              {selectedProject.images?.length > 1 && (
                <div className="modal-thumbs-row">
                  {selectedProject.images.map((imgSrc, i) => (
                    <button
                      key={imgSrc}
                      type="button"
                      className="modal-thumb-item"
                      aria-current={activeGalleryIdx === i ? 'true' : undefined}
                      onClick={() => setActiveGalleryIdx(i)}
                    >
                      <img src={imgSrc} alt={`${selectedProject.title} ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-body-content">
              <span className="modal-role-badge">{selectedProject.role}</span>
              <p className="card-desc">{selectedProject.shortDesc}</p>

              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  marginTop: '1rem',
                  color: 'var(--text-primary)',
                }}
              >
                {t.projectsSection.highlightsTitle}
              </p>
              <ul className="modal-highlights">
                {selectedProject.highlights.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>

              <div className="project-tags" style={{ marginBottom: '1.25rem' }}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="project-tag font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                <span>{t.projectsSection.visitBtn}</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        )}
      </dialog>

      {/* Floating Muted Arrows (Down only on 1st, Up above Down on middle, Up only on last) */}
      <div className="floating-section-arrows" aria-label="Section Navigation">
        {activeSection > 0 && (
          <button
            type="button"
            className="floating-arrow-btn"
            aria-label={lang === 'ar' ? 'القسم السابق' : 'Previous section'}
            title={lang === 'ar' ? 'القسم السابق' : 'Previous section'}
            onClick={() => goToSection(activeSection - 1)}
          >
            <ChevronUp size={18} />
          </button>
        )}

        {activeSection < totalSections - 1 && (
          <button
            type="button"
            className="floating-arrow-btn"
            aria-label={lang === 'ar' ? 'القسم التالي' : 'Next section'}
            title={lang === 'ar' ? 'القسم التالي' : 'Next section'}
            onClick={() => goToSection(activeSection + 1)}
          >
            <ChevronDown size={18} />
          </button>
        )}
      </div>

      {/* Vercel Web Analytics (Zero DB, Privacy-friendly traffic & visitor insights) */}
      <Analytics />
    </div>
  );
}
