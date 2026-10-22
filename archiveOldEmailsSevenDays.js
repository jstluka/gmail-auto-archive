// This code automatically archives emails with the label "seven days" after being in the inbox for seven days
function archiveOldEmailsSevenDays() {
  const searchQuery = 'in:inbox label:"seven days" older_than:7d';
  const batchSize = 100;

  const threads = GmailApp.search(searchQuery, 0, batchSize);

  if (threads.length > 0) {
    GmailApp.moveThreadsToArchive(threads);
  }

  console.log(`Archived ${threads.length} thread(s).`);
}
