/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   parse_input.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: zhhovsep <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/11/30 10:57:31 by zhhovsep          #+#    #+#             */
/*   Updated: 2025/11/30 11:04:29 by zhhovsep         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


#include "rush01.h"

int	parse_input(char *str, int clues[16])
{
	int i = 0;
	int j = 0;

	if (!str)
		return 0;

	while (str[i] && j < 16)
	{
		if (str[i] >= '1' && str[i] <= '4')
			clues[j++] = str[i++] - '0';
		else if (str[i] == ' ')
			i++;
		else
			return 0;
	}

	return (j == 16 && str[i] == '\0');
}
