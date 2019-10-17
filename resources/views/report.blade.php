<table>
    <thead>
        <tr>
            <th> Branch name</th>
            <th> Todays date  </th>
            <th> Altara pay agent </th>
            <th> Number of people who showed interest</th>
            <th> Number of credit check performed </th>
        </tr>
    </thead>
    <tbody>
         @foreach($reports as $report)
          <tr>
              <td> {{$report->name}} </td>
              <td> {{$report->date}} </td>
              <td> {{$report->staff_id}} </td>
              <td> {{$report->interest}} </td>
              <td> {{$report->check}} </td>
          </tr>
         @endforeach
   </tbody>
</table>