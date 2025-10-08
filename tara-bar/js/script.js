/* Basic email signup with validation and local fallback storage */
(function () {
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const consentInput = document.getElementById('consent');
  const messageEl = document.getElementById('form-message');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function setMessage(text, type) {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.style.color = type === 'error' ? '#ff7788' : '#b6ffda';
  }

  function isValidEmail(value) {
    return /.+@.+\..+/.test(value);
  }

  async function submitToBackend(payload) {
    // Placeholder: replace with your backend or email service endpoint later
    // Simulate network latency and success
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true };
  }

  function saveLocally(payload) {
    try {
      const key = 'tara-bar-signups';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ ...payload, ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (_) {
      // ignore storage failures
    }
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (nameInput?.value || '').trim();
      const email = (emailInput?.value || '').trim();
      const consent = !!consentInput?.checked;

      if (!name) {
        setMessage('Please enter your name.', 'error');
        nameInput?.focus();
        return;
      }
      if (!isValidEmail(email)) {
        setMessage('Please enter a valid email.', 'error');
        emailInput?.focus();
        return;
      }
      if (!consent) {
        setMessage('Please consent to receive early access emails.', 'error');
        consentInput?.focus();
        return;
      }

      setMessage('Submitting…', 'info');
      const payload = { name, email, consent };
      try {
        const res = await submitToBackend(payload);
        if (!res.ok) throw new Error('Request failed');
        saveLocally(payload);
        setMessage('You’re in! We’ll email you before launch.', 'success');
        form.reset();
      } catch (err) {
        saveLocally(payload);
        setMessage('Saved! If offline, we’ll sync later.', 'success');
      }
    });
  }
})();

