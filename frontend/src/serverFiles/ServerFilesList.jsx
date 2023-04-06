import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServerFiles } from './serverFiles.actions';
import { Container, Table, Alert } from 'react-bootstrap';
import findBestLine from './helpers/findBestLine';
import LoadingSpinner from '../shared/LoadingSpinner';

const ServerFilesList = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector(({ serverFiles }) => serverFiles);

  useEffect(() => {
    dispatch(fetchServerFiles());
  }, [dispatch]);

  const renderTableRows = () => {
    return files.map((item) => {
      const { file, lines } = item;
      const fileId = file.substr(0, file.lastIndexOf('.'));
      const { text, number, hex} = findBestLine(lines);
      return (
        <tr key={fileId}>
          <td data-label="FileName" aria-label="FileName">{file}</td>
          <td data-label="Text" aria-label="Text">{text || ''}</td>
          <td data-label="Number" aria-label="Number">{number || ''}</td>
          <td data-label="Hex" aria-label="Hex">{hex || ''}</td>
          <td data-label="Control" aria-label="Control">
            <Link to={`/server-file/${fileId}`} aria-label={`View Details for ${file}`}>View Details</Link>
          </td>
        </tr>
      );
    });
  };

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Server Files List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>FileName</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </Table>
    </Container>
  );
};

export default ServerFilesList;
