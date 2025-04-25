import os
import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Load your API key from environment
openai.api_key = "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 "


class ChatAPIView(APIView):
    """
    POST { "message": "Hello!" }
    →  { "reply": "Hi there…​" }
    """
    def post(self, request):
        user_message = request.data.get("message", "").strip()
        if not user_message:
            return Response(
                {"error": "No message provided."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": user_message}],
                temperature=0.7,
            )
            bot_reply = completion.choices[0].message.content
            return Response({"reply": bot_reply})
        except openai.error.OpenAIError as e:
            return Response(
                {"error": f"OpenAI API error: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
