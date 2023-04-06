// serverFiles/ServerFilesDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServerFileDetail } from './serverFiles.actions';
import { Container, Table, Alert } from 'react-bootstrap';
import LoadingSpinner from '../shared/LoadingSpinner';

const ServerFilesDetail = () => {
  const { filename } = useParams();
  const dispatch = useDispatch();
  const { fileDetail, loading, error } = useSelector(({ serverFiles }) => serverFiles);

  useEffect(() => {
    dispatch(fetchServerFileDetail(`${filename}.csv`));
  }, [dispatch, filename]);

  const renderTableRows = () => {
    return fileDetail?.lines.map((line, index) => (
      <tr key={index}>
        <td>{line.text}</td>
        <td>{line.number}</td>
        <td>{line.hex}</td>
      </tr>
    ));
  };

  if (loading) {
    return <LoadingSpinner />;
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
      <h1>{fileDetail?.file} Detail</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </Table>
    </Container>
  );
};

export default ServerFilesDetail;
