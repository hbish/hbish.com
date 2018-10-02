---
title: Autofit the height of a merged cell in VBA
author: ben
type: post
date: 2012-01-09T07:39:45+00:00
url: /autofit-the-height-of-a-merged-cell-in-vba/
categories:
  - notes
tags:
  - autofit
  - excel
  - merge
  - spreadsheet
  - vba

---
I have been bugged by the fact that you cannot autofit a cell&#8217;s height after it has been merged with other cells. This has been a problem with Microsoft Excel for a while now.

I use to have a macro where I just selected the cells I want to merge and it will auto size the height before it merge the selected the cell. I came across a better script by Jim Rech where I can just autofit any cell to my liking.

<pre><code class="vbscript">Dim CurrentRowHeight As Single, MergedCellRgWidth As Single
Dim CurrCell As Range
Dim ActiveCellWidth As Single, PossNewRowHeight As Single

If ActiveCell.MergeCells Then
  With ActiveCell.MergeArea
If .Rows.Count = 1 And .WrapText = True Then
  Application.ScreenUpdating = False
  CurrentRowHeight = .RowHeight
  ActiveCellWidth = ActiveCell.ColumnWidth
  For Each CurrCell In Selection
    MergedCellRgWidth = CurrCell.ColumnWidth + _
    MergedCellRgWidth
  Next
   .MergeCells = False
   .Cells(1).ColumnWidth = MergedCellRgWidth
   .EntireRow.Autofit
   PossNewRowHeight = .RowHeight
   .Cells(1).ColumnWidth = ActiveCellWidth
   .MergeCells = True
   .RowHeight = IIf(CurrentRowHeight &gt; PossNewRowHeight, _
     CurrentRowHeight, PossNewRowHeight)
  End If
End With
End If
End Sub
```