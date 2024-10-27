import { useDropzone } from "react-dropzone";

import {
    Box,
    Typography,
    IconButton,
} from '@mui/material'

import { Dropzone, Thumb } from "./style";

import { DeleteForever } from '@mui/icons-material'

const FileUpload = ({files, errors, touched, setFieldValue}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });

      // setFieldValue('nome', 'valor')

      setFieldValue("files", [...files, ...newFiles]);
    },
  });

  const handleRemoveFile = (fileName) => {
    const newFilesState = files.filter((file) => file.name !== fileName);
    setFieldValue("files", newFilesState);
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        color={errors && touched ? "error" : "textPrimary"}
      >
        Imagens
      </Typography>
      <Typography
        variant="body2"
        component="div"
        color={errors && touched ? "error" : "textPrimary"}
      >
        A primeira imagem é a foto principal do seu anúncio.
      </Typography>

      {errors && touched ? (
        <Typography color="error" variant="body2">
          {errors}
        </Typography>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Dropzone
          style={
            errors && touched
              ? { border: "2px dashed red" }
              : { border: "2px dashed black" }
          }
          error={errors && touched}
          {...getRootProps()}
        >
          <input name="files" {...getInputProps()} />
          <Typography
            color={errors && touched ? "error" : "textPrimary"}
            variant="body2"
          >
            Clique para adicionar ou arraste a imagem para aqui!
          </Typography>
        </Dropzone>
        {(files || []).map((file, index) => (
        <Thumb
            key={file.name}
            style={{ backgroundImage: `url(${file.preview})` }}
        >
            {index === 0 ? (
            <Box className="mainImage">
                <Typography variant="body2" color="secondary">
                Principal
                </Typography>
            </Box>
            ) : null}
            <Box className="mask">
            <IconButton
                color="secondary"
                onClick={() => handleRemoveFile(file.name)}
            >
                <DeleteForever fontSize="large" />
            </IconButton>
            </Box>
        </Thumb>
        ))}
      </Box>
    </>
  );
};

export default FileUpload;
