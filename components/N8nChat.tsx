"use client";

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function N8nChat() {
  useEffect(() => {
    createChat({
      // --- Required ---
      webhookUrl: 'https://evlandis.app.n8n.cloud/webhook/f8c9e6bf-2ffc-4341-8dbb-1b4a80ffc1e9/chat',

      // --- Optional Customizations ---
      initialMessages: [
        'Hello!',
        'I am the AI assistant for Landis Ventures. How can I help you today?'
      ],
      i18n: {
        en: {
          title: 'Landis Ventures AI',
          subtitle: 'AI Assistant',
          footer: 'Powered by n8n',
          getStarted: 'Get Started',
          inputPlaceholder: 'Ask me anything about our services...',
          closeButtonTooltip: 'Close chat',
        },
      },
    });
  }, []);

  return null;
};