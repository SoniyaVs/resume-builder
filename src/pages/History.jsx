import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { getHistoryApi, deleteHistoryApi } from '../services/allAPI';


function History() {
  const [allHistory, setHistory] = React.useState([])
  console.log(allHistory);
  React.useEffect(() => {
    getHistoryDetails()
  }, [])

  const getHistoryDetails = async () => {
    const result = await getHistoryApi()
    if (result.status == 200) {
      setHistory(result.data)
    }

  }

  const deleteHistory = async (id) => {
    try {
      await deleteHistoryApi(id)
      getHistoryApi()
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded  Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          {allHistory.length > 0 ?
            allHistory?.map(item => (
              <div key={item?.id} className="col-4">
                <Paper elevation={3} sx={{ my: 2, p: 5, textAlign: 'center' }}>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6>Review At:{item?.timeStamp}</h6>
                    <button onClick={() => { deleteHistory(item?.id) }} className='btn text-danger text-center fs-5'><MdDelete /></button>
                  </div>
                  <div className="border rounded p-3">
                    <img style={{ width: '200px', height: '200px' }} src={item?.resumeImg} alt="resume" />
                  </div>
                </Paper>
              </div>
            ))
            :
            <p>NoHistory</p>}
        </div>
      </Box>
    </div>
  )
}

export default History