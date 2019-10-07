import React from 'react';
import TableView from "../views/TableView"
import { dummyData } from '../DummyData';

export default function CollectionRead({ match }) {
  let recordList;

  if (match.params.view === 'table') {
    recordList = <TableView collection={dummyData.collections[0]} records={dummyData.records} />
  }

  return (
    <div>
      <p>Collection read {match.params.id}</p>
      {recordList}
    </div>
  )
}
  