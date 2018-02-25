# Gmail Cleaner

This script will help you delete old emails inside your Gmail Mailbox by moving them to trash.
It deletes emails based on the Gmail Queries mentioned inside searches.
The default script will delete the emails that are-
1) Inside default Gmail Cetegories
2) Unread
3) Not starred
4) Not in Trash
5) Don't have attachments
6) Not marked important
7) Older than 7 days

The default filters are kept in place to keep your important emails safe.
So, please ensure that your important emails don't match all the above criteria.

For example, I star all my important email threads which won't be deleted by the script.

Google permanently deletes mails from Trash after 30 days.
* [Delete or recover deleted Gmail messages](https://support.google.com/mail/answer/7401?co=GENIE.Platform%3DDesktop&hl=en)

You can add a gmail query.More info on Gmail Queries Given below-
* [Gmail Query Search](https://support.google.com/mail/answer/7190?hl=en)

The script is efficient version of the code snippet from following blog post-

[A cleaning robot for your Gmail inbox](https://medium.com/@fw3d/a-cleaning-robot-for-your-gmail-inbox-f44c01306ea2)

## Technology/Framework

* [Google Apps Script](https://developers.google.com/apps-script/)

## Getting Started

Create a Google Apps Script project at https://script.google.com/ using the contents of GmailCleaner.gs.

Under Edit > Current project's triggers, schedule the script to run on a recurring basis.
(e.g. "Time-driven", "Minutes timer", and "Every 15 minutes")

To continue learning about how to extend Google Docs, Sheets and Forms
with Apps Script, take a look at the following resources:

* [Overview of Apps Script](https://developers.google.com/apps-script/overview)
* [Guide to Add-ons](https://developers.google.com/apps-script/add-ons/)

## Authors

* **Omkar Marathe** - *Initial work* - [Omkar](https://github.com/omkar9999/)

## Support/Contributing

If you've found an error in this sample, please file an issue [here](https://github.com/omkar9999/GmailCleaner/issues)

Patches are encouraged, and may be submitted by forking this project and
submitting a pull request through GitHub.

General questions about Apps Script can be asked on
StackOverflow: [google-apps-script on StackOverflow](http://stackoverflow.com/questions/tagged/google-apps-script)

General Apps Script bug reports or feature requests should be directed to the
Apps Script Issue Tracker: [google-apps-script-issues](https://code.google.com/p/google-apps-script-issues/issues/list)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

