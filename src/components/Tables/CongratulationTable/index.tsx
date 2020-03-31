import React, { useState } from 'react';
import MaterialTable from 'material-table';
import localization from '../localization';
import columns from './columns';
import { Table } from './types';

const CongratulationTable: React.FC = () => {
  const [state, setState] = useState<Table>(columns);

  return (
    <MaterialTable
      title="Поздравления"
      columns={state.columns}
      data={state.data}
      style={{ flex: 1, height: '85vh', marginTop: '5vh', boxShadow: 'none' }}
      localization={localization}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};

export default CongratulationTable;
