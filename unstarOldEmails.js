function unstarOldEmails() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 50);

  const threads = GmailApp.search('is:starred older_than:50d');

  threads.forEach(thread => {
    thread.getMessages().forEach(message => {
      if (message.isStarred() && message.getDate() < cutoff) {
        message.unstar();
      }
    });
  });
}
