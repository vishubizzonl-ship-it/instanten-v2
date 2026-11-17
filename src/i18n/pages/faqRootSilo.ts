/**
 * instanten route ke silo pages ke FAQ.
 *
 * Scope (user rule "alag-alag separation"): sirf root route ke company pages —
 * About, Contact, Privacy Policy, Terms, Blog. Har tool ka apna silo
 * (`/onlinecompass/…`, `/tools/<slug>/…`) bilkul alag hai; uske FAQ wahan
 * `ToolFaq.astro` se aate hain, yahan se nahi.
 *
 * Har page par 5 questions, saare asli search queries se banaye gaye hain jo
 * tools hub ke users puchte hain (Who runs it, is it free for client work,
 * do you store my paste, can I republish an article, …). Copy English hai —
 * localized pages par ye block render hi nahi hota (English leak na ho).
 */
import type { FaqItem } from '../../components/SeoHead.astro';

export type RootSiloFaqPage = 'about' | 'contact' | 'privacy' | 'terms' | 'blog';

export interface RootSiloFaqContent {
  heading: string;
  lead: string;
  faqs: FaqItem[];
}

export const rootSiloFaq: Record<RootSiloFaqPage, RootSiloFaqContent> = {
  about: {
    heading: 'Frequently asked questions about Instanten',
    lead: 'The five things people ask most about who runs this tools hub and how the instant tools are built.',
    faqs: [
      {
        question: 'Who runs Instanten, and is it a company?',
        answer:
          'Instanten is an independent software project run by a small editorial and engineering team, not a venture-funded company with a sales floor. That matters in practice: there is no growth team inventing pop-ups, no account system to monetise, and no incentive to hide a feature behind a paywall. The tools are built to be used and left, and the only formal commitment is the one written on the terms page.',
      },
      {
        question: 'How does a free online tools website pay for itself?',
        answer:
          'Almost entirely through static hosting and low running costs. Every tool is a pre-rendered page, so serving a million page views costs less than hosting a single database-backed application. Instanten deliberately keeps its scope small instead of adding heavy server features, which is why the free tier can stay free without a usage cap and without selling profile data to advertisers.',
      },
      {
        question: 'How do you check that a tool gives correct results?',
        answer:
          'Each instrument follows a published specification rather than a custom guess: heading and tilt come from the W3C DeviceOrientation Event, the Qibla bearing is a great-circle calculation from the W3C Geolocation API position, and speeds are converted with exact SI factors (1 knot = 1.852 km/h). Where a reading depends on hardware, the page states the limitation instead of claiming laboratory accuracy.',
      },
      {
        question: 'Can I request a tool that is missing from the hub?',
        answer:
          'Yes, and requests are the main reason new tools get added. Send the job you are trying to finish, the format of your input, and what a useful output would look like through the contact page. A request that describes the workflow is far more actionable than a tool name, because it tells the team which edge cases and units actually matter to real users.',
      },
      {
        question: 'Is Instanten the same as the four sensor instruments on the site?',
        answer:
          'They share a design system but not their content. Each of the four instruments — compass, bubble level, speedometer and Qibla finder — runs its own silo with its own guides, legal pages and error pages. Nothing is merged, so a guide about the compass never competes with an article about the Qibla bearing.',
      },
    ],
  },
  contact: {
    heading: 'Contact questions, answered first',
    lead: 'Before you write in, these five answers cover the requests that arrive most often.',
    faqs: [
      {
        question: 'How quickly does Instanten reply to a message?',
        answer:
          'Most written messages get an answer within two to three working days, and bug reports about a tool producing a wrong result are handled first because they affect everyone. There is no ticket robot and no auto-closer — a person reads the message. If you have not heard back in a week, resend it; occasionally a form submission is lost on a flaky mobile connection.',
      },
      {
        question: 'What should I include when reporting a broken tool?',
        answer:
          'Send the tool name, the exact input that failed (or a simplified version of it), the output you expected, and the browser plus device you were using. A screenshot helps, but the input is what makes the bug reproducible. If the problem only appears on one file or one pasted string, include a trimmed copy of it — the edge case is usually the whole bug.',
      },
      {
        question: 'Can I suggest a new instant tool for the hub?',
        answer:
          'Yes. Describe the job rather than the tool: what you paste in, what you need out, and how often you do it. Requests that fit a small, well-defined workflow are the easiest to build, and they are prioritised over broad requests for a full editor. Include any standard or format the result must follow, because that shapes the implementation.',
      },
      {
        question: 'Do you offer paid support, custom development or advertising placements?',
        answer:
          'No. Instanten is an independent free tools hub, so there is no paid support tier, no custom build service and no sponsored placement in the tools library. The library ranks tools by usefulness, not by who pays. If you are reporting something that affects a paying client of your own, say so in the message and it will be treated with priority.',
      },
      {
        question: 'How do I ask a privacy question about my data?',
        answer:
          'Send it through the same contact form and mark it as a data question. Because most processing happens in your browser, the answer is often that nothing was transmitted — but every request is checked against the privacy policy rather than answered from memory. Rights requests under frameworks such as the CCPA/CPRA or the GDPR are handled in the same channel.',
      },
    ],
  },
  privacy: {
    heading: 'Privacy questions people actually ask',
    lead: 'Five short answers to the data questions that come up most often on a free tools hub.',
    faqs: [
      {
        question: 'Does Instanten store the text or files I paste into a tool?',
        answer:
          'No. Your input is processed inside the browser tab you are using, and the result is written back to the same page. The site has no server endpoint that accepts your pasted text, which is why the tools keep working when the network drops after the first load. Anything you copy stays in your clipboard, on your device, under your control.',
      },
      {
        question: 'What is stored on my device, and how do I clear it?',
        answer:
          'Your light or dark theme choice is kept in local storage, and that is what makes the mode survive a reload, a new tab or a phone restart. Clearing site data in your browser settings removes it, and the site then falls back to your system preference. No account, email address or profile is stored, because none is ever created.',
      },
      {
        question: 'Does Instanten use cookies or analytics?',
        answer:
          'The site uses a shared analytics tag to count page views and to group traffic by tool, which is how the team knows which utilities are worth improving. It does not build advertising profiles, does not run cross-context behavioural advertising, and does not sell personal data. Blocking analytics does not affect any tool, because every utility works without it.',
      },
      {
        question: 'How do I exercise my GDPR or CCPA rights?',
        answer:
          'Ask through the contact page and say which right you are exercising. In practice the answer is usually short, because the site holds no account records: there is no profile to export, correct or delete. Access and deletion requests are still logged and answered formally so you have a written record for your own compliance paperwork.',
      },
      {
        question: 'Is Instanten safe for children to use?',
        answer:
          'The tools are written for general audiences and contain no chat, uploads or user accounts, so there is nothing for a child to sign up for and no public profile to expose. Because the site is not directed at children under 13, it does not knowingly collect their personal information. Supervising adults should still treat pasted text as they would any other content on a shared device.',
      },
    ],
  },
  terms: {
    heading: 'Terms questions, in plain language',
    lead: 'The five points readers check before they rely on a free tool for real work.',
    faqs: [
      {
        question: 'Can I use Instanten tools for paid client or commercial work?',
        answer:
          'Yes. Output you produce with the tools — formatted data, generated codes, compressed images, converted values — is yours to use, including in commercial projects. There is no attribution requirement and no licence fee. The only limit is on the site itself: you may not resell or republish the tools as your own product.',
      },
      {
        question: 'Are the results guaranteed to be correct?',
        answer:
          'No tool can promise that, so the terms say so plainly. Utilities follow published standards and are tested against known inputs, but a browser quirk, an unusual file or an edge case can still produce an unexpected result. For anything safety-critical or legally binding, verify the output with a second method before you rely on it.',
      },
      {
        question: 'Who owns the output the tools generate?',
        answer:
          'You do. Instanten claims no ownership over the strings, files or values you create, and no licence is taken over your input. Because processing happens locally, the site often never sees either the input or the output, which makes the ownership question simpler than it is on an upload-based service.',
      },
      {
        question: 'What is the site not liable for?',
        answer:
          'Instanten is provided as-is, without warranty, and is not liable for losses arising from use of a tool or from reliance on a result. That includes indirect and consequential losses such as missed deadlines or downstream data problems. The practical version: use the hub for the small jobs it is built for, and keep a second check for anything that matters.',
      },
      {
        question: 'Can these terms change, and when do I need to check them?',
        answer:
          'The terms can be updated as the tools change, and the review date at the top of the page always shows the current version. You do not need to check them every visit — only before you rely on the site for something important, or when a new tool category appears. Continued use after an update means the current version applies.',
      },
    ],
  },
  blog: {
    heading: 'Questions about the Instanten blog',
    lead: 'How the guides are written, how often they appear, and what you may do with them.',
    faqs: [
      {
        question: 'How often does the Instanten blog publish a new guide?',
        answer:
          'New articles appear when a tool, a workflow or a common mistake justifies one, which works out to a few posts a month rather than a fixed daily schedule. Every guide is tied to a utility that exists on the hub, so nothing is published as filler traffic bait. When a tool changes, its guide is updated instead of left stale.',
      },
      {
        question: 'Who writes the articles on this tools hub?',
        answer:
          'The Instanten editorial and engineering team writes and reviews them, which is why each post carries a byline and a review date. Technical claims — encoding rules, contrast ratios, unit definitions — are checked against the published standard rather than a secondary blog, and the reference is linked so you can verify it yourself.',
      },
      {
        question: 'Can I quote or republish an Instanten guide?',
        answer:
          'Short quotations with a link back to the original page are welcome, and they are the usual way teams share a workflow internally. Republishing a full article elsewhere is not permitted, because duplicate copies compete with the original and confuse readers about which version is current. If you need a translation or a full reprint, ask first.',
      },
      {
        question: 'How do I find the guide that matches my task?',
        answer:
          'Start from the tool itself: most utility pages link to their own walkthrough, which shows the exact steps and the expected output. The blog index groups the rest by theme, and each article links back to the tools it mentions, so you can move from reading to doing in one click. The search bar on the homepage also matches tool names and tags.',
      },
      {
        question: 'How do I suggest a topic for a future article?',
        answer:
          'Send the task you keep getting stuck on through the contact page and describe what you tried first. Requests that repeat — several readers asking the same question — become guides, and questions that reveal a missing feature become tools. Either way, the message is read by the people who write and build the site.',
      },
    ],
  },
};
