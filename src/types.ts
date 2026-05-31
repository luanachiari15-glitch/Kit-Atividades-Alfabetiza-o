/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineItem {
  id: string;
  period: string; // "Dia 1", "Semana 1", etc.
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string; // "Mãe", "Professora"
  stars: number;
  text: string;
  avatarColor: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  badgeValue: string;
  icon: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  textColor: string;
}

export interface PainItem {
  id: string;
  emoji: string;
  text: string;
}

export interface AudienceItem {
  id: string;
  text: string;
}
