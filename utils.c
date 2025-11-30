/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   utils.c                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: zhhovsep <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/11/30 11:33:40 by zhhovsep          #+#    #+#             */
/*   Updated: 2025/11/30 14:13:44 by zhhovsep         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush01.h"

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

static void ft_putnbr_unsigned(int n)
{
	if (n >= 10)
		ft_putnbr_unsigned(n / 10);
	ft_putchar((n % 10) + '0');
}

void ft_putnbr(int n)
{
	if (n < 0)
	{
		ft_putchar('-');
		n = -n;
	}
	ft_putnbr_unsigned(n);
}

void print_grid(int **grid)
{
	int i = 0;
	while (i < 4)
	{
		int j = 0;
		while (j < 4)
		{
			ft_putnbr(grid[i][j]);
			if (j < 3)
				ft_putchar(' ');
			j++;
		}
		ft_putchar('\n');
		i++;
	}
}

int count_visible(int line[4])
{
	int i;
	int max;
	int visible;

	i = 0;
	max = 0;
	visible = 0;
	while (i < 4)
	{
		if(line[i] > max)
		{
			max = line[i];
			visible++;
		}
		i++;
	}
	return visible;
}

int check_line(int line[4], int clue_left, int clue_right)
{
	int rev[4];
	int i;

	i = 0;
	while (i < 4)
	{
		rev[i] = line[3 - i];
		i++;
	}
	if (clue_left && count_visible(rev) != clue_right)
		return 0;
	return 1;
}
