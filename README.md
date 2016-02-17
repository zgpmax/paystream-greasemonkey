paystream-greasemonkey
======================

Greasemonkey use scripts for use with https://portal.paystream.co.uk/

These scripts attempt to work around some of the more egregious annoyances
with the PayStream Portal.

## PayStream_Expenses_Total.user.js

Update 2016-02-17: No longer needed --- they appear to have added a total
to the expenses page.

Incredibly, the PayStream Portal expenses page does not provide a total of
the expenses on the page.  This script computes the total and adds it at the
bottom of the table.

## PayStream_Expenses_Table_Alignment.user.js

Update 2016-02-17: Appears to no longer be needed --- expenses page alignment
seems to be sane without this.

Bizarrely, the PayStream Portal expense page formats the 'Type', and
'Business Purpose' columns centre aligned.  This makes then incredibly
difficult to read.  This script adds CSS to make those columns left-aligned,
and much easier to read.  Whilst it's at it, it also makes the 'Date' column
right-aligned, and fixes the alignment of the column headings.

## PayStream_Fix_Font.user.js

The designers of the PayStream Portal appear to have been a little
over-enthusiastic about fonts and decided to style the entire site in
'VAGRoundedLight'.  Fancy fonts are all well and good for headings and
callouts, but using one across the entire site is tiring.  This script adds
CSS to re-set the font to something a bit less wearing: sans-serif.

## PayStream_Fix_Banking_Table_Alignment.user.js

Update 2016-02-17: Appears to no longer be needed --- banking page alignment
seems to be sane without this.

Similar to PayStream_Expenses_Table_Alignment.user.js but works for the
banking page.
