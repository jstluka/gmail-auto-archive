// This code automatically archives any email with the label "six hours" once it has been in the inbox for six hours
function archiveOldEmailsOSixHours() {
  const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);

  const threads = GmailApp.search('in:inbox label:"six hours"', 0, 100);

  const oldThreads = threads.filter(thread =>
    thread.getLastMessageDate() < sixHoursAgo
  );

  if (oldThreads.length > 0) {
    GmailApp.moveThreadsToArchive(oldThreads);
  }

  console.log(`Archived ${oldThreads.length} thread(s).`);
}
