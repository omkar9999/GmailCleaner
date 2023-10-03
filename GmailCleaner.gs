/** MIT License

Copyright (c) 2018 Omkar Marathe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
function cleanMailBox() {
    // check the category Gmail added to the thread
    var searches = [
        '-in:inbox -in:sent -in:chat -in:drafts -is:trash -is:starred -is:important -has:attachment older_than:2y'
    ];
    // creating an array containing all the threads matching the searches above
    var threads = [];
    for (var i = 0; i < searches.length; i++) {
        var tmp_threads = GmailApp.search(searches[i], 0, 500); // Limiting the search to 200 results but its adjustable to certain extent.  NB: Maximum is 500
        threads = threads.concat(
            tmp_threads);
    }
    console.info('Search Query returned %d Gmail Threads', threads.length);
    // we split the array if its size more than 100 
    if (threads.length > 100) {
        var splitThreads = [];
        for (var i = 0; i < threads.length; i++) {
            splitThreads.push(threads[i]);
            if (String(i).endsWith('99') || i == threads.length - 1) {
                console.info('i is at %d', i); // Trouble-shooting step, can be removed
                GmailApp.moveThreadsToTrash(splitThreads);
                console.info('Moved %d threads to trash', splitThreads.length);
                splitThreads = [];
            }
        }
    } else {
        GmailApp.moveThreadsToTrash(threads);
        console.info('Moved %d threads to trash', threads.length);
    }
}
