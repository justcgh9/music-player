'use client'
import StepDisplayer from "@/components/StepDisplayer";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useState } from "react";
import  TextField  from "@mui/material/TextField";
import FileUploader from "@/components/FileUploader";


export default function CreateTrack() {
    const [currentStep, setCurrentStep] = useState(0)
    const [thumbnail, setThumbnail] = useState(null)
    const [audio, setAudio] = useState(null)

    const next = () => {
        setCurrentStep(prev => prev + 1)
    }

    const back = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (

        <div>
            <StepDisplayer currentStep={currentStep}>
                {currentStep === 0 &&
                <Grid container direction={'column'} style={{padding: 20}}>
                    <TextField
                        style={{marginTop: 15}}
                        label={"Track name"}
                    />
                    <TextField
                        style={{marginTop: 15}}
                        label={"Author"}
                    />
                    <TextField
                        style={{marginTop: 15}}
                        label={"Lyrics"}
                        multiline
                        rows={3}
                    />
                </Grid>
                }
                {currentStep === 1 &&
                    <FileUploader setFile={setThumbnail} accept="image/*">
                        <Button>Upload Thumbnail</Button>
                    </FileUploader>
                }
                {currentStep === 2 && 
                    <FileUploader setFile={setAudio} accept="audio/*">
                        <Button>Upload Audio</Button>
                    </FileUploader>

                }
            </StepDisplayer>
            <Grid container justifyContent="space-between">
                <Button onClick={back} disabled={currentStep <= 0}>Back</Button>
                <Button onClick={next} disabled={currentStep >= 3}>Next</Button>
            </Grid>
        </div>
    )
}