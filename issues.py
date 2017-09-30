#!/usr/bin/env python
# -*- coding: utf-8 -*-

from github import Github
import random
import settings

def get_random_issue():
	g = Github(settings.ENV['USER_GITHUB'], settings.ENV['PSWD_GITHUB'])

	repos = list(g.get_organization(settings.ENV['ORGANIZATION_GITHUB']).get_repos())
	
	repo = random.choice(repos)
	
	issue = random.choice(list(repo.get_issues()))

	url = ((issue.url).replace('https://api.', 'https://')).replace('/repos', '')
	
	return issue.title + '\n' + url