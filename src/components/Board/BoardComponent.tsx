import React, { useEffect, useState } from 'react'
import CellComponent from '../Cell/CellComponent'
import './boardComponent.scss'

export default function BoardComponent() {
  const [cells, setCells] = useState<string[][]>([]);
  const [cellsComps, setCellsComps] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    console.log(cells.length > 0)
    if (cells.length > 0) {
      let comps: React.ReactNode[] = [];
      for (let i = 0; i < 8; i++) {
        let row: React.ReactNode[] = [];
        for (let j = 0; j < 8; j++) {
          row.push(<CellComponent key={cells[i][j]}/>);
        }
        comps.push(<div className='chess-row'>{row}</div>);
      }
      setCellsComps(comps);
    } else {
      let cellsSet: string[][] = [];
      for (let i = 0; i < 8; i++) {
        cellsSet[i] = [];
        for (let j = 0; j < 8; j++) {
          cellsSet[i][j] = `${i}${j}`;
        }
      }
      console.log(cellsSet)
      setCells(cellsSet)
    }
  },[cells])

  const comps: React.ReactNode[] = [];
  return (
    <div className='board'>
      {cellsComps}

    </div>
  )
}
