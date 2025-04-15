import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { CreateMeasureType } from '../../services/post.service';

const ModalMeasureType = ({ onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    fullTitle: '',
    shortTitle: '',
    digitalCode: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CreateMeasureType.postData('wms/measure-type', data);
      if (response) console.log(response.data);
      handleClose();
      onSuccess();
    } catch (error) {
      console.error("Error while creating measure type:", error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained" size="small">
        Добавить тип измерения
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}>
          <Typography variant="h6" mb={2} id="modal-title">
            Добавить 
            тип измерения
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Полное название"
                name="fullTitle"
                value={data.fullTitle}
                onChange={handleChange}
                variant="outlined"
                size="small"
                required
              />
              <TextField
                label="Короткое название"
                name="shortTitle"
                value={data.shortTitle}
                onChange={handleChange}
                variant="outlined"
                size="small"
                required
              />
              <TextField
                type="number integer"
                label="Код"
                name="digitalCode"
                value={data.digitalCode}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <Button type="submit" variant="contained" fullWidth>
                Добавить
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalMeasureType