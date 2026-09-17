function archiveOldEmailsThirty() {
  const searchQuery = 'in:inbox label:"thirty days" older_than:30d';
  const batchSize = 100;

  const threads = GmailApp.search(searchQuery, 0, batchSize);

  if (threads.length > 0) {
    GmailApp.moveThreadsToArchive(threads);
  }

  console.log(`Archived ${threads.length} thread(s).`);
}
