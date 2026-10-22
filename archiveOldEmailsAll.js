// This code automatically archives any email older than 100 days
function archiveOldEmailsAll() {
  const searchQuery = 'in:inbox older_than:100d';
  const batchSize = 100;

  const threads = GmailApp.search(searchQuery, 0, batchSize);

  if (threads.length > 0) {
    GmailApp.moveThreadsToArchive(threads);
  }

  console.log(`Archived ${threads.length} thread(s).`);
}
