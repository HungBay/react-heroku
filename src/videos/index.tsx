import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Dialog, DialogTitle, Paper, TextField } from '@mui/material';

interface DataVideos {
    name: string
    country: Country[]
}

interface Country {
    country_id: string
    probability: number
}

const URL = 'https://api.nationalize.io/?name=nathaniel'

function Videos(props: any) {
    const [open, setOpen] = useState(false);
    const [videos, setVideos] = useState<Country[]>([])
    const [video, setVideo] = useState<Country>({
        country_id: '',
        probability: 0
    })

    useEffect(() => {
        // call api de cap nhat lai state
        fetchData();
    }, [])

    const fetchData = () => {
        fetch(URL).then(res => res.json()).then((data: DataVideos) => {
            setVideos(data.country)
        })
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleSave = () => {
        const data = [...videos];
        data.push(video)
        setVideos(data)
        setOpen(!open)
    }

    const handleChangeCountry = (e: any) => {
        const value = e.target.value;
        setVideo({
            ...video,
            country_id: value
        })
    }

    const handleChangeProbability = (e: any) => {
        const value = e.target.value;
        setVideo({
            ...video,
            probability: value
        })
    }

    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        if (query) {
            const data = [...videos].filter(v => v.country_id.toLocaleLowerCase().search(query.toLocaleLowerCase()) !== -1);
            setVideos(data)
            return;
        }
        return fetchData();
    }

    const handleDelte = (id: string) => {
       
    }

    return (
        <div>
            <TextField type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> <Button type="button" onClick={handleSearch}>Search</Button>
            <Button onClick={handleOpen}>Add</Button>
            {/*  */}
            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>Set backup account
                    <br />
                    <input type="text" onChange={handleChangeCountry} />
                    <input type="number" onChange={handleChangeProbability} />

                    <Button onClick={handleSave}>Save</Button>
                </DialogTitle>
            </Dialog>
            {/*  */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="left">country_id</TableCell>
                            <TableCell align="left">probability</TableCell>
                            <TableCell align="left">active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videos.map((video, index) => (
                            <TableRow
                                key={video.country_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {video.country_id}
                                </TableCell>
                                <TableCell align="left">{video.probability}</TableCell>
                                <TableCell align="left">
                                    <Button>Edit</Button> -
                                    <Button onClick={() => handleDelte(video.country_id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Videos