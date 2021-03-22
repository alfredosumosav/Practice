function containsCycle(firstNode) {
  // Start both runners at the beginning
  let slowRunner = firstNode;
  let fastRunner = firstNode;

  // Until we hit the end of the list
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    // Case: fastRunner is about to "lap" slowRunner
    if (fastRunner === slowRunner) {
      return true;
    }
  }

  // Case: fastRunner hit the end of the list
  return false;
}
