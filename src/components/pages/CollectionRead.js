import React from 'react';
import TableView from "../views/TableView"
import { dummyData } from '../DummyData';

export default function CollectionRead({ match }) {
  let recordList;
  const viewProps = {
    collection: dummyData.collections[0],
    records: dummyData.records
  }

  if (match.params.view === 'table') {
    recordList = <TableView {...viewProps}/>
  }

  return (
    <div>
      <p>Collection read {match.params.id}</p>
      {recordList}
    </div>
  )
}
  