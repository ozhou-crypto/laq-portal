/* LAQ Practitioner Portal — User Story Data
   One source of truth. Consumed by userstories-panel.js.
   Story IDs normalised to uppercase FR-BI-XXX convention.
*/
var LAQ_US = (function () {

  // ── Story definitions ──────────────────────────────────────────────────
  var stories = {
    '#160': {
      role: 'Portal user',
      text: 'I want to be able to access and view information regarding LAQ\'s data collection and privacy policies.'
    },
    'FR-BI-070': {
      role: 'Practitioner',
      text: 'I want the online application form to have a consistent autosave function and reliably submit and be received on application, so that applications in progress are not lost due to system clashes and firms are not left waiting endlessly for unprocessed applications.'
    },
    'FR-BI-276': {
      role: 'Preferred Supplier / In-House Solicitor',
      text: 'As a preferred supplier, I want the system to pre-fill an application form with client details so that I can save time when creating a new application for the client. As an In-House Solicitor, I want the system to pre-fill an application form with data (previously submitted) for that client, so that I can save time on data entry when lodging a new application for a returning client.'
    },
    'FR-BI-302': {
      role: 'In-house Practitioner',
      text: 'I want to securely access the portal using multi-factor authentication (MFA), so that my sensitive client and case data is protected from unauthorised access.'
    },
    'FR-BI-302-A': {
      role: 'In-house Solicitor',
      text: 'I want to securely access the portal using SSO, so that my sensitive client and case data is protected from unauthorised access.'
    },
    'FR-BI-303': {
      role: 'In-house Practitioner / In-house Solicitor',
      text: 'I want to retrieve and re-set my sign-in credentials independently, so that I can regain access quickly and in a secure manner without contacting LAQ support.'
    },
    'FR-BI-305': {
      role: 'In-house Practitioner / In-house Solicitor',
      text: 'I want to use a portal that complies with web content accessibility guidelines (WCAG 2.1 Level AA, so that the platform is fully accessible regardless of my abilities.',
      global: true
    },
    'FR-BI-306': {
      role: 'Administrator',
      text: 'I want to track all User actions on the Practitioner Portal, so that we satisfy auditing requirements and maintain a detailed history of all activity.'
    },
    'FR-BI-308': {
      role: 'In-house Practitioner',
      text: 'I want to search and filter my active and archived Grant of Aid files using standard and custom fields (e.g., Q-Number, client name), so that I can quickly locate specific case materials.'
    },
    'FR-BI-309': {
      role: 'In-house Solicitor',
      text: 'I want to search and filter my submitted invoices and extensions, so that I can quickly verify the status and payment history for my work.'
    },
    'FR-BI-310-A': {
      role: 'Practitioner Portal user',
      text: 'I want a personalised home dashboard that surfaces my active matters, pending actions, and recent activity, so that I can quickly orientate myself and act on the most time-sensitive items without navigating away from the home page.'
    },
    'FR-BI-311': {
      role: 'In-house Practitioner, Solicitor, CLC and FDRP',
      text: 'I want to use context-based search functionality, including predictive text, so that I can complete my searches for clients or documents faster.',
      global: true
    },
    'FR-BI-312': {
      role: 'In-house Solicitor, CLC',
      text: 'I want to lodge an initial application for a grant of aid electronically on behalf of a client, so that I can follow the required method of submission and initiate the assessment process.'
    },
    'FR-BI-313': {
      role: 'In-house Solicitor',
      text: 'I want to submit an extension request for existing grants of aid electronically, so that I can continue working on a client\'s matter without delays.'
    },
    'FR-BI-314': {
      role: 'In-house Solicitor, CLC',
      text: 'I want to be able to save an application or extension form in progress and retrieve it later, so that I don\'t lose my work and can manage complex submissions over time.'
    },
    'FR-BI-315': {
      role: 'In-house Solicitor (Preferred Supplier)',
      text: 'I want to have field validations for all key data elements before submission, so that all mandatory and correct data is provided upfront, reducing administrative follow-up action.'
    },
    'FR-BI-316': {
      role: 'In-house Solicitor, CLC',
      text: 'I want to complete dynamic applications, so that I have a guided and responsive data entry experience.'
    },
    'FR-BI-317': {
      role: 'In-house Solicitor',
      text: 'I want to utilise forms that are pre-filled with client or case data, so that I save time and reduce manual data entry errors.'
    },
    'FR-BI-318': {
      role: 'In-house Solicitor, CLC',
      text: 'I want the ability to select my preference for LAQ to communicate directly with the client for follow up or further information requests, so that the administrative burden of chasing up documentation is removed.'
    },
    'FR-BI-319': {
      role: 'In-house Solicitor, barrister, FDRP',
      text: 'I want to upload and attach multiple supporting documents in a single step/transaction in the portal, so that I can provide all necessary information securely in one transaction.'
    },
    'FR-BI-320': {
      role: 'In-house Solicitor, CLC, barrister, FDRP',
      text: 'I want to attach files in various common formats (e.g., PDF, Word, JPG), so that I am not restricted when submitting essential supporting material.'
    },
    'FR-BI-321': {
      role: 'In-house Solicitor, CLC, barrister, FDRP',
      text: 'I want to send and receive correspondence electronically via the portal, so that information exchange with LAQ is secure and linked directly to the file record.'
    },
    'FR-BI-322': {
      role: 'Preferred Supplier, CLC, external barristers, FDRP',
      text: 'I want to electronically update my contact details, ABN, and bank account details, so that LAQ can process payments accurately and maintain current provider records.'
    },
    'FR-BI-323': {
      role: 'In-house Solicitor',
      text: 'I want to submit outcomes for the matter electronically, so that the grant file reflects the progress of legal work.'
    },
    'FR-BI-324': {
      role: 'Preferred Supplier, In-house Solicitor, CLC',
      text: 'I want to retrieve all submitted applications and extensions online, so that I am informed of the progress without having to contact the Grants team.'
    },
    'FR-BI-325': {
      role: 'In-house Solicitor, CLC',
      text: 'I want to view a summary of essential components of the Client\'s Grant of Aid file, including the commitment and conditions, so that I always know the scope and status of the legal assistance granted.'
    },
    'FR-BI-326': {
      role: 'In-house Solicitor, CLC, external barristers, FDRP',
      text: 'I want to receive multi-channel notifications (e.g., SMS or Email) about updates to my file status, correspondence, decision letters, invoices, and payment reductions/refusals, so that I am promptly alerted to important changes.'
    },
    'FR-BI-328': {
      role: 'CLC, barrister, FDRP',
      text: 'I want to submit invoices electronically for work performed on Grants of Aid cases (in line with the grant of aid that has been approved), so that I can receive timely payment for the services delivered.'
    },
    'FR-BI-329': {
      role: 'Preferred Supplier, In-house Solicitor, Barrister, CLC, FDRP',
      text: 'I want to cancel a submitted invoice without having to manually email the Accounts Payables Team for cancellation.'
    },
    'FR-BI-330': {
      role: 'Preferred Supplier',
      text: 'I want to submit an invoice and request an extension for the matter in a single workflow, so it will streamline the administrative process for continuing my file work.'
    },
    'FR-BI-410': {
      role: 'Practitioner',
      text: 'When I submit an application, I want to receive a unique reference number to quote when I contact the grants team, so that I have a clear reference for following up on my submission.'
    }
  };

  // ── Screen → story ID mappings ─────────────────────────────────────────
  // Keys match the filename prefix (e.g. 'S01' matches S01_signin_mfa.html).
  // '_all' is appended to every screen.
  var screens = {
    '_all':  ['FR-BI-311', 'FR-BI-305'],
    'S01':   ['FR-BI-302', 'FR-BI-302-A', 'FR-BI-303'],
    'S01b':  ['FR-BI-302', 'FR-BI-302-A', 'FR-BI-303'],
    'S03':   ['#160'],
    'S04':   ['FR-BI-310-A'],
    'S06':   ['FR-BI-070', 'FR-BI-276', 'FR-BI-312', 'FR-BI-314', 'FR-BI-315', 'FR-BI-316', 'FR-BI-317', 'FR-BI-319', 'FR-BI-320', 'FR-BI-410'],
    'S07':   ['FR-BI-314'],
    'S07b':  ['FR-BI-324'],
    'S08':   ['FR-BI-410'],
    'S09':   ['FR-BI-313', 'FR-BI-330'],
    'S10':   ['FR-BI-308'],
    'S11':   ['FR-BI-311', 'FR-BI-323', 'FR-BI-321', 'FR-BI-325'],
    'S12':   ['FR-BI-318', 'FR-BI-321', 'FR-BI-326'],
    'S13':   ['FR-BI-319', 'FR-BI-320'],
    'S15':   ['FR-BI-315', 'FR-BI-326'],
    'S16':   ['FR-BI-329'],
    'S17':   ['FR-BI-328'],
    'S18':   ['FR-BI-309', 'FR-BI-328'],
    'S19':   ['FR-BI-322', 'FR-BI-306'],
    'index': []
  };

  // ── Public API ─────────────────────────────────────────────────────────
  function getForPage(filename) {
    // Extract screen key: 'S04_dashboard.html' → 'S04', 'index.html' → 'index'
    var base = filename.replace(/\.html$/i, '').replace(/.*\//, '');
    var key = base.match(/^(S\d+[a-z]*|index)/i);
    key = key ? key[1] : null;

    var ids = [].concat(screens['_all'] || []);
    if (key && screens[key]) {
      // Avoid duplicates
      var pageIds = screens[key].filter(function (id) { return ids.indexOf(id) === -1; });
      ids = screens[key].concat(screens['_all'].filter(function (id) { return pageIds.indexOf(id) === -1; }));
    }

    return ids
      .filter(function (id) { return stories[id]; })
      .map(function (id) { return Object.assign({ id: id }, stories[id]); });
  }

  return { getForPage: getForPage };
})();
