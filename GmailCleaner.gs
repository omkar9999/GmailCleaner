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
        '{category:promotions category:Social category:Updates category:Forums} -in:Trash -is:starred -is:important -has:attachment older_than:7d is:unread'
    ];
    // creating an array containing all the threads matching the searches above
    var threads = [];
    for (var i = 0; i < searches.length; i++) {
        var tmp_threads = GmailApp.search(searches[i], 0, 200); // Limiting the search to 200 results but its adjustable to certain extent
        threads = threads.concat(
            tmp_threads);
    }
    console.info('Search Query returned %d Gmail Threads', threads.length);
    // we split the array if its size more than 100 
    if (threads.length > 100) {
        var splitThreads = [];
        for (var i = 0; i < threads.length; i++) {
            splitThreads.push(threads[i]);
            if (i == 99 || i == threads.length - 1) {
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
