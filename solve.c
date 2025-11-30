/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   solve.c                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: zhhovsep <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/11/30 11:05:17 by zhhovsep          #+#    #+#             */
/*   Updated: 2025/11/30 11:59:51 by zhhovsep         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush01.h"

int is_unique(int **grid, int row, int col, int num)
{
	int i = 0;
	while (i < 4)
	{
		if (grid[row][i] == num || grid[i][col] == num)
			return 0;
		i++;
	}
	return 1;
}

static void get_col(int **grid, int col, int out[4])
{
	int i = 0;
	while (i < 4)
	{
		out[i] = grid[i][col];
		i++;
	}
}

int solve(int **grid, int row, int col, int clues[16])
{
	if (row == 4)
		return 1;

	int next_row = row;
	int next_col = col + 1;
	if (next_col == 4)
	{
		next_col = 0;
		next_row = row + 1;
	}

	int num = 1;
	while (num <= 4)
	{
		if (is_unique(grid, row, col, num))
		{
			grid[row][col] = num;

			if (col == 3)
			{
				int line[4];
				int k = 0;
				while (k < 4)
				{
					line[k] = grid[row][k];
					k++;
				}
				if (!check_line(line, clues[8 + row], clues[12 + row]))
				{
					grid[row][col] = 0;
					num++;
					continue;
				}
			}

			if (row == 3)
			{
				int line[4];
				get_col(grid, col, line);
				if (!check_line(line, clues[col], clues[4 + col]))
				{
					grid[row][col] = 0;
					num++;
					continue;
				}
			}

			if (solve(grid, next_row, next_col, clues))
				return 1;

			grid[row][col] = 0;
		}
		num++;
	}
	return 0;
}
