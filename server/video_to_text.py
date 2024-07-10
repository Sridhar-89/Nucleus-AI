


# import sys
# import pytube
# from moviepy.editor import VideoFileClip
# from openai import OpenAI
# import contextlib
# import os
# from dotenv import load_dotenv

# # Load environment variables from .env file
# load_dotenv()

# openai_api_key = os.getenv("op")
# client = OpenAI(api_key=openai_api_key)



# def download_youtube_audio(url, target='audio.mp3'):
#     yt = pytube.YouTube(url)
#     stream = yt.streams.filter(only_audio=True).first()
#     stream.download(filename=target)
#     return target

# @contextlib.contextmanager
# def suppress_output():
#     with open(os.devnull, "w") as devnull:
#         old_stdout = sys.stdout
#         old_stderr = sys.stderr
#         sys.stdout = devnull
#         sys.stderr = devnull
#         try:
#             yield
#         finally:
#             sys.stdout = old_stdout
#             sys.stderr = old_stderr

# def extract_audio_from_video(video_path, audio_path='extracted_audio.mp3'):
#     with suppress_output():
#         video = VideoFileClip(video_path)
#         audio = video.audio
#         audio.write_audiofile(audio_path)
#         video.close()
#     return audio_path

# def transcribe_audio(audio_path):
#     with open(audio_path, "rb") as audio_file:
#         response = client.audio.transcriptions.create(model="whisper-1", file=audio_file)
#         return response.text

# if __name__ == '__main__':
#     if sys.argv[1] == '--url':
#         audio_path = download_youtube_audio(sys.argv[2])
#         transcription = transcribe_audio(audio_path)
#     elif sys.argv[1] == '--file':
#         audio_path = extract_audio_from_video(sys.argv[2])
#         transcription = transcribe_audio(audio_path)
    
#     # Output the transcription only
#     print(transcription)

import sys
import yt_dlp
from moviepy.editor import VideoFileClip
from openai import OpenAI
import contextlib
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

openai_api_key = os.getenv("op")
client = OpenAI(api_key=openai_api_key)

def download_youtube_audio(url, target='audio.mp3'):
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': target,
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'quiet': True
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    return target

@contextlib.contextmanager
def suppress_output():
    with open(os.devnull, "w") as devnull:
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        sys.stdout = devnull
        sys.stderr = devnull
        try:
            yield
        finally:
            sys.stdout = old_stdout
            sys.stderr = old_stderr

def extract_audio_from_video(video_path, audio_path='extracted_audio.mp3'):
    with suppress_output():
        video = VideoFileClip(video_path)
        audio = video.audio
        audio.write_audiofile(audio_path)
        video.close()
    return audio_path

def transcribe_audio(audio_path):
    with open(audio_path, "rb") as audio_file:
        response = client.audio.transcriptions.create(model="whisper-1", file=audio_file)
        return response.text

if __name__ == '__main__':
    if sys.argv[1] == '--url':
        audio_path = download_youtube_audio(sys.argv[2])
        transcription = transcribe_audio(audio_path)
    elif sys.argv[1] == '--file':
        audio_path = extract_audio_from_video(sys.argv[2])
        transcription = transcribe_audio(audio_path)
    
    # Output the transcription only
    print(transcription)
