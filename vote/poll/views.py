from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Poll, Candidates, TempCandidatesTable
from datetime import datetime
import hashlib

# Create your views here.




def createPoll(request):

    candidates = TempCandidatesTable.objects.all()
    return render(request, 'poll/createPoll.html', {'candidates' : candidates})

def poll(request, code):

    poll = Poll.objects.filter(code=code)[0]
    return render(request, 'poll/poll.html', {'poll' : poll})

def addOne(request):

    candidate = request.POST['candidate']
    Candidates.objects.create(name=candidate).save()
    TempCandidatesTable.objects.create(name=candidate).save()
    return HttpResponseRedirect('/createPoll/')

def deleteOne(request):
    pass

def voting (request, code):

    id = request.POST['id']
    candidate = Candidates.objects.filter(id=id)[0]
    candidate.votes += 1
    candidate.save()
    return HttpResponseRedirect('/poll/{0}/'.format(code))

def submitPoll(request):

    candidates = Candidates.objects.all()
    temp = TempCandidatesTable.objects.all()

    startDate = request.POST['startDate']
    endDate = request.POST['endDate']

    codeString = startDate + endDate
    code = (hashlib.sha256(codeString.encode())).hexdigest()
    print('\n {} \n'.format(code))

    poll = Poll.objects.create(
        code=code,
        startDate=startDate,
        endDate=endDate,
        )

    for candidate in candidates[len(candidates) - len(temp):]:
        poll.candidates.add(candidate)

    poll.save()
    temp.delete()

    return HttpResponseRedirect('/poll/{0}/'.format(code))
